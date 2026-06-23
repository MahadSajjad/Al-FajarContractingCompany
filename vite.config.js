import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    target: 'es2018',
    cssCodeSplit: true,
  },
  // vite-react-ssg options (typed via `declare module 'vite'` in the package).
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested', // /about -> /about/index.html (clean URLs on static hosts)
    // antd v5 uses CSS-in-JS; mocking browser globals keeps SSG render stable.
    mock: true,
  },
});
