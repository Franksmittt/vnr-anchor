import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUTPUT_DIR = path.join(process.cwd(), 'public/images/signature-icons');
const SIZE = 28;

const ICONS = {
  mobile: '<rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  web: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
};

const COLORS = {
  lime: '#92C741',
  blue: '#234694',
};

function buildSvg(iconMarkup, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconMarkup}</svg>`;
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const [iconName, iconMarkup] of Object.entries(ICONS)) {
  for (const [colorName, colorValue] of Object.entries(COLORS)) {
    const svg = buildSvg(iconMarkup, colorValue);
    const outputPath = path.join(OUTPUT_DIR, `${iconName}-${colorName}.png`);

    await sharp(Buffer.from(svg)).png().toFile(outputPath);
    console.log(`Wrote ${outputPath}`);
  }
}
