const fs = require('fs');
const { cpSync, mkdirSync } = fs;
const src = 'dist/app';
const dest = 'dist/app/browser';
try {
  mkdirSync(dest, { recursive: true });
  // copy contents of src into dest
  const path = require('path');
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    // avoid copying the destination directory or server output into itself
    if (entry.name === 'browser' || entry.name === 'server') continue;
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    cpSync(from, to, { recursive: true, force: true });
  }
  console.log(`Copied contents ${src} -> ${dest}`);
} catch (err) {
  console.error('Copy failed:', err);
  process.exit(1);
}
