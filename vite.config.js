import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages: nandakumarmatha.github.io repo → site root, base must stay '/' */
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  publicDir: 'public',
});
