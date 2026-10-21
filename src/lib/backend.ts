import { invoke } from '@tauri-apps/api/core';

export type DataInfo = { path: string; portable: boolean };

export const dataInfo = () => invoke<DataInfo>('data_info');
