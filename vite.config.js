import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CodeXDesign/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is set correctly
  },
});