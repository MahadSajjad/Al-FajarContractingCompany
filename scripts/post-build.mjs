// Post-build: promote the prerendered /404 page to dist/404.html so static
// hosts (Vercel) serve a real, branded 404 for unmatched routes.
import { copyFileSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');

const nested = resolve(dist, '404/index.html');
const flat = resolve(dist, '404.html');

if (existsSync(nested)) {
  copyFileSync(nested, flat);
  rmSync(resolve(dist, '404'), { recursive: true, force: true });
  console.log('[post-build] wrote dist/404.html');
} else {
  console.warn('[post-build] dist/404/index.html not found — skipped 404.html');
}
