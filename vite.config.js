import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub Pages: nandakumarmatha.github.io repo → site root, base must stay '/' */
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  publicDir: 'public',
});
