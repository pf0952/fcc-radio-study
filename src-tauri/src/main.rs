// No console window in release builds.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::path::{Path, PathBuf};

use serde::Serialize;
use tauri::{Manager, WebviewUrl, WebviewWindowBuilder};

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
fn data_info(dir: tauri::State<DataDir>) -> DataDir {
    dir.inner().clone()
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
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![data_info])
        .run(tauri::generate_context!())
        .expect("error while running FCC Radio Study");
}
