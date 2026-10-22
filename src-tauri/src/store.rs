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

