# 02 · Cấu trúc thư mục, file nào làm gì

```
.
├── .github/workflows/deploy.yml   ← robot build + deploy khi push (docs/06)
├── astro.config.mjs               ← cấu hình Astro: domain, plugin toán, theme code
├── package.json                   ← danh sách thư viện + các lệnh npm run ...
├── public/                        ← file tĩnh, copy nguyên xi lên site
│   ├── images/                    ←   ảnh: public/images/a.png  →  /images/a.png
│   └── favicon.ico
├── scripts/                       ← lệnh tiện ích: new.mjs (tạo bài/project), images.mjs (nén ảnh)
├── docs/                          ← bạn đang đọc đây (không lên website)
└── src/
    ├── config.ts                  ← ★ tên, câu giới thiệu, link mạng xã hội, menu
    ├── data/about.ts              ← ★ kinh nghiệm, học vấn, kỹ năng (trang About)
    ├── content/
    │   ├── posts/*.md             ← ★ bài viết
    │   └── projects/*.md          ← ★ project
    ├── content.config.ts          ← "khuôn" frontmatter cho posts/projects
    ├── styles/global.css          ← toàn bộ CSS
    ├── lib/utils.ts               ← hàm dùng chung: lấy bài, lọc nháp, sắp xếp, định dạng ngày
    ├── layouts/Base.astro         ← khung chung mọi trang: <head>, header, footer
    ├── components/                ← các mảnh giao diện tái sử dụng
    │   ├── Header.astro, Footer.astro
    │   ├── SecHead.astro          ←   tiêu đề section "§01 Tên ////// ghi chú"
    │   ├── Icon.astro             ←   icon SVG (GitHub, LinkedIn, mail, RSS…)
    │   ├── CutoffExplorer.astro   ←   widget kéo cut-off ở trang chủ (dùng lib/stats.ts)
    │   ├── Toc.astro              ←   mục lục bài viết + tô sáng mục đang đọc
    │   ├── PostList.astro         ←   danh sách bài
    │   ├── ProjectCard.astro      ←   thẻ project
    │   └── ProjectThumb.astro     ←   hình minh hoạ tự sinh khi project chưa có ảnh
    └── pages/                     ← MỖI FILE = MỘT ĐƯỜNG DẪN
        ├── index.astro            →  /
        ├── about.astro            →  /about/
        ├── blog/index.astro       →  /blog/
        ├── blog/[...slug].astro   →  /blog/<tên-file-bài>/  (sinh tự động cho từng bài)
        ├── projects/index.astro   →  /projects/
        ├── projects/[...slug].astro → /projects/<tên-file-project>/
        ├── tags/[tag].astro       →  /tags/<tag>/
        ├── rss.xml.ts             →  /rss.xml
        └── 404.astro
```

★ = file bạn sẽ sửa thường xuyên. Phần còn lại ít khi phải đụng.

## Một trang được ghép như thế nào?

Lấy ví dụ trang `/blog/the-will-to-power/`:

1. Astro thấy `src/pages/blog/[...slug].astro`. Dấu `[...]` nghĩa là "trang động".
2. Hàm `getStaticPaths()` trong file đó gọi `getPosts()` (ở `src/lib/utils.ts`). Hàm này
   đọc mọi file trong `src/content/posts/`, bỏ bài nháp, rồi trả về danh sách.
3. Với mỗi bài, Astro sinh một trang. `slug` chính là tên file bỏ đuôi `.md`.
4. Trang đó dùng `<Base>` (layout), và `<Content />` là nội dung Markdown đã chuyển sang HTML.

## Đọc hiểu một file `.astro`

```astro
---
// Phần giữa hai dấu --- là code (TypeScript), chạy lúc BUILD, không chạy trên trình duyệt.
import Base from '../layouts/Base.astro';
const posts = await getPosts();
---
<!-- Phần dưới là HTML, chèn biến bằng { } -->
<Base title="Writing">
  <h1>Có {posts.length} bài</h1>
  {posts.map((p) => <a href={`/blog/${p.id}/`}>{p.data.title}</a>)}
</Base>
```

Nếu bạn biết Python thì `posts.map(p => ...)` giống `[... for p in posts]`.

## Frontmatter và "khuôn" (schema)

`src/content.config.ts` khai báo mỗi bài viết **phải** có `title`, `description`, `date`, còn
`tags`, `draft`, … là tuỳ chọn (có giá trị mặc định). Cách làm này giống việc định nghĩa
schema cho bảng SQL: dữ liệu sai kiểu thì bị chặn ngay từ đầu.

Muốn thêm một trường mới, ví dụ `readingTime`:
1. Thêm `readingTime: z.number().optional(),` vào schema `posts`.
2. Dùng trong trang: `{post.data.readingTime && <span>{post.data.readingTime} min</span>}`.
