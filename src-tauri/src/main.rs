// No console window in release builds.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod store;

use std::fs;
use std::path::{Path, PathBuf};
use std::sync::Mutex;

use serde::Serialize;
use tauri::{Manager, State, WebviewUrl, WebviewWindowBuilder};

/// Folder created next to the .exe so the app can run from a USB stick.
const PORTABLE_DIR: &str = "FCC-Radio-Study-Data";
/// Fallback under %APPDATA% when the .exe's folder is read-only.
const FALLBACK_DIR: &str = "FCC-Radio-Study";

#[derive(Clone, Serialize)]
struct DataDir {
    path: PathBuf,
    /// True when the folder sits next to the .exe.
    portable: bool,
}

/// Serializes saves so two never write the temporary file at once.
struct SaveLock(Mutex<()>);

fn is_writable(dir: &Path) -> bool {
    if fs::create_dir_all(dir).is_err() {
        return false;
    }
    let probe = dir.join(".write-test");
    let ok = fs::write(&probe, b"ok").is_ok();
    let _ = fs::remove_file(&probe);
    ok
}

fn pick_data_dir() -> Result<DataDir, String> {
    let exe = std::env::current_exe().map_err(|e| e.to_string())?;
    if let Some(exe_dir) = exe.parent() {
        let dir = exe_dir.join(PORTABLE_DIR);
        if is_writable(&dir) {
            return Ok(DataDir { path: dir, portable: true });
        }
    }
    let appdata = std::env::var_os("APPDATA").ok_or("APPDATA is not set")?;
    let dir = PathBuf::from(appdata).join(FALLBACK_DIR);
    if is_writable(&dir) {
        Ok(DataDir { path: dir, portable: false })
    } else {
        Err(format!("Cannot write to {}", dir.display()))
    }
}

#[tauri::command]
fn data_info(dir: State<DataDir>) -> DataDir {
    dir.inner().clone()
}

#[tauri::command]
fn load_progress(dir: State<DataDir>) -> Result<store::Loaded, String> {
    store::load(&dir.path)
}

#[tauri::command]
fn save_progress(data: String, dir: State<DataDir>, lock: State<SaveLock>) -> Result<(), String> {
    let _guard = lock.0.lock().map_err(|e| e.to_string())?;
    store::save(&dir.path, &data)
}

/// `folder/name`, or `folder/stem (2).ext` and so on when that file already exists.
fn unique_path(folder: &Path, name: &str) -> PathBuf {
    let (stem, ext) = name.rsplit_once('.').unwrap_or((name, ""));
    std::iter::once(folder.join(name))
        .chain((2..).map(|n| folder.join(format!("{stem} ({n}).{ext}"))))
        .find(|p| !p.exists())
        .expect("an unused file name")
}

/// Saves an export (progress or an exam result) in the user's Downloads folder, or in the data
/// folder when there is no Downloads folder, and returns where it went. Never overwrites a file.
#[tauri::command]
fn export_file(name: String, contents: String, dir: State<DataDir>) -> Result<PathBuf, String> {
    if name.is_empty() || name.starts_with('.') || name.contains(['/', '\\', ':']) {
        return Err(format!("Not a plain file name: {name}"));
    }
    let downloads = std::env::var_os("USERPROFILE").map(|home| PathBuf::from(home).join("Downloads")).filter(|d| d.is_dir());
    let path = unique_path(&downloads.unwrap_or_else(|| dir.path.clone()), &name);
    fs::write(&path, contents).map_err(|e| e.to_string())?;
    Ok(path)
}

/// Opens File Explorer with the file selected.
#[tauri::command]
fn show_in_folder(path: String) -> Result<(), String> {
    use std::os::windows::process::CommandExt;
    if !Path::new(&path).is_file() {
        return Err(format!("{path} no longer exists"));
    }
    std::process::Command::new("explorer")
        .raw_arg(format!("/select,\"{path}\""))
        .spawn()
        .map(|_| ())
        .map_err(|e| e.to_string())
}

/// Opens a web link (e.g. an official question pool) in the default browser.
#[tauri::command]
fn open_url(url: String) -> Result<(), String> {
    if !url.starts_with("https://") {
        return Err("Only https links can be opened".into());
    }
    std::process::Command::new("rundll32")
        .args(["url.dll,FileProtocolHandler", &url])
        .spawn()
        .map(|_| ())
        .map_err(|e| e.to_string())
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let dir = pick_data_dir()?;
            // Keep WebView2's own cache in the data folder too, so a USB copy leaves nothing behind.
            WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
                .title("FCC Radio Study")
                .inner_size(1200.0, 820.0)
                .min_inner_size(900.0, 600.0)
                .data_directory(dir.path.join("WebView2"))
                .build()?;
            app.manage(dir);
            app.manage(SaveLock(Mutex::new(())));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![data_info, load_progress, save_progress, export_file, show_in_folder, open_url])
        .run(tauri::generate_context!())
        .expect("error while running FCC Radio Study");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn exports_never_overwrite() {
        let dir = std::env::temp_dir().join(format!("fcc-export-test-{}", std::process::id()));
        let _ = fs::remove_dir_all(&dir);
        fs::create_dir_all(&dir).unwrap();
        assert_eq!(unique_path(&dir, "result.csv"), dir.join("result.csv"));
        fs::write(dir.join("result.csv"), "1").unwrap();
        assert_eq!(unique_path(&dir, "result.csv"), dir.join("result (2).csv"));
        fs::write(dir.join("result (2).csv"), "2").unwrap();
        assert_eq!(unique_path(&dir, "result.csv"), dir.join("result (3).csv"));
    }
}
