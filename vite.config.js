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
    rollupOptions: {
      output: {
        // Force shared vendors into single cached chunks so antd isn't
        // duplicated across the entry and lazy route chunks. Route-specific
        // deps (supabase, zod) are left to Rollup so they stay in their lazy
        // chunk (e.g. only /contact pulls supabase).
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/[\\/](antd|@ant-design|rc-[a-z-]+|@rc-component)[\\/]/.test(id)) return 'antd';
          if (id.includes('react-icons')) return 'icons';
          if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id))
            return 'react';
          return undefined;
        },
      },
    },
  },
  // vite-react-ssg options (typed via `declare module 'vite'` in the package).
  ssgOptions: {
    // Keep the default 'sync' (in-order) script loading: `async` lets the app
    // module run before the inline __VITE_REACT_SSG_HASH__ script, which breaks
    // the static-loader-data fetch (manifest-undefined.json) and hydration.
    formatting: 'none',
    dirStyle: 'nested', // /about -> /about/index.html (clean URLs on static hosts)
    // antd v5 uses CSS-in-JS; mocking browser globals keeps SSG render stable.
    mock: true,
  },
});
