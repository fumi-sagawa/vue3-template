import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
});
