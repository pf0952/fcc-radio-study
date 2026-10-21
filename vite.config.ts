import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Tauri expects a fixed dev port and serves the built files from dist/.
export default defineConfig({
  plugins: [svelte()],
  clearScreen: false,
  server: { port: 1420, strictPort: true },
  // The 1,200 pool questions are bundled on purpose (the app is offline), so the main chunk is large.
  build: { target: 'chrome120', outDir: 'dist', chunkSizeWarningLimit: 2000 },
});
