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
        .invoke_handler(tauri::generate_handler![data_info, load_progress, save_progress, open_url])
        .run(tauri::generate_context!())
        .expect("error while running FCC Radio Study");
}
