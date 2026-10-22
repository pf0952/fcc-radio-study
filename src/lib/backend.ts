import { invoke } from '@tauri-apps/api/core';

export type DataInfo = { path: string; portable: boolean };

export const dataInfo = () => invoke<DataInfo>('data_info');

/** Saved progress JSON (null on first run), plus a message for the user if the backup was used. */
export const loadProgressFile = () => invoke<{ data: string | null; notice: string | null }>('load_progress');

export const saveProgressFile = (data: string) => invoke<void>('save_progress', { data });

/** Saves an export in the Downloads folder (never overwriting) and returns its full path. */
export const exportFile = (name: string, contents: string) => invoke<string>('export_file', { name, contents });

/** Opens File Explorer with the file selected. */
export const showInFolder = (path: string) => invoke<void>('show_in_folder', { path });

export const openUrl = (url: string) => invoke<void>('open_url', { url });
