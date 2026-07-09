import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [, , stagingDir] = process.argv;
if (!stagingDir) {
  console.error('Usage: node scripts/process-service-images.mjs <staging-dir>');
  process.exit(1);
}

const outDir = path.resolve('public/images/services');
await mkdir(outDir, { recursive: true });

const SIZES = [
  { width: 1600, suffix: '' },
  { width: 800, suffix: '-800' },
];

const files = (await readdir(stagingDir)).filter((f) => f.toLowerCase().endsWith('.jpg'));

let report = [];

for (const file of files) {
  const slug = file.replace(/\.jpg$/i, '');
  const srcPath = path.join(stagingDir, file);
  const meta = await sharp(srcPath).metadata();

  for (const { width, suffix } of SIZES) {
    const base = sharp(srcPath).resize({ width, height: Math.round(width * (9 / 16)), fit: 'cover' });

    await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(outDir, `${slug}${suffix}.jpg`));
    await base.clone().webp({ quality: 76 }).toFile(path.join(outDir, `${slug}${suffix}.webp`));
    await base.clone().avif({ quality: 62 }).toFile(path.join(outDir, `${slug}${suffix}.avif`));
  }

  report.push({ slug, srcWidth: meta.width, srcHeight: meta.height });
  console.log(`processed ${slug} (source ${meta.width}x${meta.height})`);
}

console.log(`\nDone. ${report.length} services processed -> ${outDir}`);
