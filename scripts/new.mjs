// Tạo nhanh bài viết hoặc project mới từ mẫu trong docs/templates/.
//
//   npm run new:post -- "Gini, AUC and KS"
//   npm run new:project -- "Credit risk PD scorecard"
//
// Script sẽ:
//   1. Đổi tiêu đề thành tên file (slug): "Gini, AUC and KS" -> gini-auc-and-ks
//   2. Copy mẫu vào src/content/posts/<slug>.md (hoặc projects/), điền sẵn tiêu đề + ngày hôm nay
//   3. Tạo sẵn thư mục ảnh public/images/<slug>/ để bạn bỏ hình vào
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const kind = process.argv[2]; // 'post' | 'project'
const title = process.argv.slice(3).join(' ').trim();

if (!['post', 'project'].includes(kind) || !title) {
  console.log('\nCách dùng:');
  console.log('  npm run new:post -- "Tiêu đề bài viết"');
  console.log('  npm run new:project -- "Tên project"\n');
  process.exit(1);
}

// "Phân tích Gini & AUC" -> "phan-tich-gini-auc" (bỏ dấu tiếng Việt, chữ thường, nối bằng -)
const slug = title
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/đ/g, 'd')
  .replace(/Đ/g, 'D')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const folder = kind === 'post' ? 'posts' : 'projects';
const file = `src/content/${folder}/${slug}.md`;
const imgDir = `public/images/${slug}`;

if (existsSync(file)) {
  console.error(`\n✗ Đã có file ${file}. Đổi tiêu đề khác hoặc mở file đó ra sửa.\n`);
  process.exit(1);
}

const d = new Date(); // ngày theo giờ máy (không dùng UTC để khỏi lệch ngày)
const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const text = readFileSync(`docs/templates/${kind}.md`, 'utf8')
  .replace(/^title: .*$/m, `title: ${JSON.stringify(title)}`)
  .replace(/^date: .*$/m, `date: ${today}`)
  .replace(/<ten-bai>|<ten-project>/g, slug)
  .replace(/<!--[\s\S]*?-->\n*/, ''); // bỏ dòng comment hướng dẫn copy

writeFileSync(file, text);
mkdirSync(imgDir, { recursive: true });

const url = kind === 'post' ? `/blog/${slug}/` : `/projects/${slug}/`;
console.log(`
✓ Đã tạo   ${file}
✓ Thư mục ảnh  ${imgDir}/   (chèn ảnh: ![mô tả](/images/${slug}/ten-anh.png))

Tiếp theo:
  1. npm run dev  rồi mở  http://localhost:4321${url}
  2. Viết nội dung. Đang để draft: true (chỉ bạn thấy khi chạy dev).
  3. Xong thì đổi draft: false, chạy  npm run images  rồi git add / commit / push.
`);
