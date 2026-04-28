import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is read from env so the same config works for:
//   • Local dev               -> '/'              (default)
//   • GitHub Pages (project)  -> '/<repo-name>/'  (set by CI workflow)
//   • Custom domain / user.github.io -> '/'       (set BASE_PATH=/)
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
