/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],

  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
