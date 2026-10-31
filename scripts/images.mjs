// Thu nhỏ ảnh quá to trong public/images/ để trang tải nhanh.
//
//   npm run images
//
// Quy tắc:
//   - Ảnh rộng hơn 1600px  -> thu về rộng 1600px (giữ tỉ lệ)
//   - Ảnh .png/.jpg nặng hơn 400KB -> nén lại (giữ nguyên định dạng và tên file)
//   - Ảnh đã nhỏ thì bỏ qua. Chạy nhiều lần cũng không sao.
// File được ghi đè tại chỗ, nên link trong bài viết không phải sửa.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public/images';
const MAX_W = 1600;
const MAX_KB = 400;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let changed = 0;
for (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

  const before = statSync(file).size;
  const input = readFileSync(file); // đọc hết vào bộ nhớ để ghi đè an toàn
  const meta = await sharp(input).metadata();
  const tooWide = (meta.width ?? 0) > MAX_W;
  const tooHeavy = before / 1024 > MAX_KB;
  if (!tooWide && !tooHeavy) continue;

  let img = sharp(input).rotate(); // rotate(): sửa ảnh chụp điện thoại bị xoay
  if (tooWide) img = img.resize({ width: MAX_W });
  if (ext === '.png') img = img.png({ compressionLevel: 9, palette: true, quality: 85 });
  else if (ext === '.webp') img = img.webp({ quality: 82 });
  else img = img.jpeg({ quality: 82, mozjpeg: true });

  const out = await img.toBuffer();
  if (out.length >= before && !tooWide) continue; // nén không nhỏ hơn thì giữ bản cũ
  writeFileSync(file, out);
  changed++;
  console.log(`✓ ${file}: ${meta.width}px ${Math.round(before / 1024)}KB -> ${tooWide ? MAX_W : meta.width}px ${Math.round(out.length / 1024)}KB`);
}
console.log(changed ? `\nĐã tối ưu ${changed} ảnh.` : 'Không có ảnh nào cần tối ưu. 👍');
