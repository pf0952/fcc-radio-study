//! progress.json on disk: atomic saves, one backup, and recovery from the backup.
use std::fs;
use std::io::Write;
use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};

use serde::Serialize;

pub const FILE: &str = "progress.json";
pub const BACKUP: &str = "progress.backup.json";
const TEMP: &str = "progress.json.tmp";

#[derive(Serialize, Debug, PartialEq)]
pub struct Loaded {
    /// The saved progress as JSON text, or None on first run.
    pub data: Option<String>,
    /// Something the user should be told, e.g. that the backup was used.
    pub notice: Option<String>,
}

/// Contents of `path` if it holds a JSON object.
fn read_valid(path: &Path) -> Option<String> {
    let text = fs::read_to_string(path).ok()?;
    let value: serde_json::Value = serde_json::from_str(&text).ok()?;
    value.is_object().then_some(text)
}

/// Moves an unreadable progress file aside instead of deleting it.
fn set_aside(dir: &Path) {
    let secs = SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_secs()).unwrap_or(0);
    let _ = fs::rename(dir.join(FILE), dir.join(format!("progress.unreadable-{secs}.json")));
}

pub fn load(dir: &Path) -> Result<Loaded, String> {
    let main = dir.join(FILE);
    if let Some(data) = read_valid(&main) {
        return Ok(Loaded { data: Some(data), notice: None });
    }
    let backup = dir.join(BACKUP);
    if let Some(data) = read_valid(&backup) {
        set_aside(dir);
        fs::copy(&backup, &main).map_err(|e| e.to_string())?;
        let notice = "Your progress file couldn't be read, so it was restored from the backup. Your most recent answer may be missing.";
        return Ok(Loaded { data: Some(data), notice: Some(notice.into()) });
    }
    if main.exists() {
        set_aside(dir);
        let notice = "Your progress file couldn't be read and there was no usable backup, so you're starting fresh. The unreadable file was kept in the data folder.";
        return Ok(Loaded { data: None, notice: Some(notice.into()) });
    }
    Ok(Loaded { data: None, notice: None })
}

/// Writes to a temporary file, keeps the previous progress.json as the backup, then renames the
/// temporary file over progress.json, so a crash never leaves a half-written progress file.
pub fn save(dir: &Path, data: &str) -> Result<(), String> {
    let value: serde_json::Value = serde_json::from_str(data).map_err(|e| format!("Refusing to save invalid progress: {e}"))?;
    if !value.is_object() {
        return Err("Refusing to save progress that isn't a JSON object".into());
    }
    let temp = dir.join(TEMP);
    let mut file = fs::File::create(&temp).map_err(|e| e.to_string())?;
    file.write_all(data.as_bytes()).map_err(|e| e.to_string())?;
    file.sync_all().map_err(|e| e.to_string())?;
    drop(file);

    let main = dir.join(FILE);
    if read_valid(&main).is_some() {
        fs::copy(&main, dir.join(BACKUP)).map_err(|e| e.to_string())?;
    }
    fs::rename(&temp, &main).map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::PathBuf;

    fn temp_dir(name: &str) -> PathBuf {
        let dir = std::env::temp_dir().join(format!("fcc-store-test-{name}-{}", std::process::id()));
        let _ = fs::remove_dir_all(&dir);
        fs::create_dir_all(&dir).unwrap();
        dir
    }

    #[test]
    fn first_run_has_no_data() {
        let dir = temp_dir("first");
        assert_eq!(load(&dir).unwrap(), Loaded { data: None, notice: None });
    }

    #[test]
    fn save_keeps_previous_version_as_backup() {
        let dir = temp_dir("backup");
        save(&dir, r#"{"schema":1,"n":1}"#).unwrap();
        save(&dir, r#"{"schema":1,"n":2}"#).unwrap();
        assert_eq!(fs::read_to_string(dir.join(FILE)).unwrap(), r#"{"schema":1,"n":2}"#);
        assert_eq!(fs::read_to_string(dir.join(BACKUP)).unwrap(), r#"{"schema":1,"n":1}"#);
        assert!(!dir.join(TEMP).exists());
        assert_eq!(load(&dir).unwrap().data.as_deref(), Some(r#"{"schema":1,"n":2}"#));
    }

    #[test]
    fn unreadable_progress_is_restored_from_backup() {
        let dir = temp_dir("restore");
        save(&dir, r#"{"schema":1,"n":1}"#).unwrap();
        save(&dir, r#"{"schema":1,"n":2}"#).unwrap();
        fs::write(dir.join(FILE), "{\"schema\":1,\"n\":").unwrap(); // truncated, as after a crash
        let loaded = load(&dir).unwrap();
        assert_eq!(loaded.data.as_deref(), Some(r#"{"schema":1,"n":1}"#));
        assert!(loaded.notice.unwrap().contains("restored from the backup"));
        // The backup is put back as progress.json and the bad file is kept aside.
        assert_eq!(fs::read_to_string(dir.join(FILE)).unwrap(), r#"{"schema":1,"n":1}"#);
        let kept = fs::read_dir(&dir).unwrap().filter(|e| e.as_ref().unwrap().file_name().to_string_lossy().starts_with("progress.unreadable-")).count();
        assert_eq!(kept, 1);
    }

    #[test]
    fn missing_progress_uses_backup() {
        let dir = temp_dir("missing");
        fs::write(dir.join(BACKUP), r#"{"schema":1,"n":7}"#).unwrap();
        assert_eq!(load(&dir).unwrap().data.as_deref(), Some(r#"{"schema":1,"n":7}"#));
    }

    #[test]
    fn both_unreadable_starts_fresh_and_keeps_the_file() {
        let dir = temp_dir("both");
        fs::write(dir.join(FILE), "not json").unwrap();
        fs::write(dir.join(BACKUP), "also not json").unwrap();
        let loaded = load(&dir).unwrap();
        assert_eq!(loaded.data, None);
        assert!(loaded.notice.is_some());
        assert!(!dir.join(FILE).exists());
    }

    #[test]
    fn crash_while_writing_keeps_the_last_good_save() {
        let dir = temp_dir("crash");
        save(&dir, r#"{"schema":1,"n":1}"#).unwrap();
        save(&dir, r#"{"schema":1,"n":2}"#).unwrap();
        fs::write(dir.join(TEMP), "{\"schema\":1,\"n\":").unwrap(); // the app died mid-write, before the rename
        assert_eq!(load(&dir).unwrap(), Loaded { data: Some(r#"{"schema":1,"n":2}"#.into()), notice: None });
        // The next save simply overwrites the leftover temporary file.
        save(&dir, r#"{"schema":1,"n":3}"#).unwrap();
        assert_eq!(fs::read_to_string(dir.join(FILE)).unwrap(), r#"{"schema":1,"n":3}"#);
        assert_eq!(fs::read_to_string(dir.join(BACKUP)).unwrap(), r#"{"schema":1,"n":2}"#);
    }

    #[test]
    fn saving_after_a_restore_continues_from_the_backup() {
        let dir = temp_dir("after-restore");
        save(&dir, r#"{"schema":1,"n":1}"#).unwrap();
        save(&dir, r#"{"schema":1,"n":2}"#).unwrap();
        fs::write(dir.join(FILE), "").unwrap(); // emptied
        assert_eq!(load(&dir).unwrap().data.as_deref(), Some(r#"{"schema":1,"n":1}"#));
        save(&dir, r#"{"schema":1,"n":4}"#).unwrap();
        assert_eq!(fs::read_to_string(dir.join(FILE)).unwrap(), r#"{"schema":1,"n":4}"#);
        assert_eq!(fs::read_to_string(dir.join(BACKUP)).unwrap(), r#"{"schema":1,"n":1}"#);
        // A second launch reads the new save with no notice.
        assert_eq!(load(&dir).unwrap(), Loaded { data: Some(r#"{"schema":1,"n":4}"#.into()), notice: None });
    }

    #[test]
    fn a_json_value_that_is_not_an_object_counts_as_unreadable() {
        let dir = temp_dir("not-object");
        fs::write(dir.join(BACKUP), r#"{"schema":1,"n":5}"#).unwrap();
        fs::write(dir.join(FILE), "null").unwrap();
        let loaded = load(&dir).unwrap();
        assert_eq!(loaded.data.as_deref(), Some(r#"{"schema":1,"n":5}"#));
        assert!(loaded.notice.is_some());
    }

    #[test]
    fn invalid_json_is_never_written() {
        let dir = temp_dir("invalid");
        save(&dir, r#"{"schema":1}"#).unwrap();
        assert!(save(&dir, "{oops").is_err());
        assert_eq!(fs::read_to_string(dir.join(FILE)).unwrap(), r#"{"schema":1}"#);
    }
}
