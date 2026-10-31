# 00 · Bắt đầu từ đây

## Website này dùng những gì?

Một website tĩnh (static site) là một đống file HTML/CSS/JS có sẵn, server chỉ việc gửi cho
trình duyệt, không có database hay backend. GitHub Pages host loại site này miễn phí.

Viết tay từng file HTML thì cực, nên ta dùng một **static site generator**: bạn viết nội dung
bằng Markdown, công cụ tự sinh ra HTML. Site cũ của bạn dùng **Jekyll** (Ruby). Site mới dùng
**Astro** (Node.js).

| Thành phần | Vai trò | Bạn cần biết đến mức nào |
| --- | --- | --- |
| **Markdown** (`.md`) | Viết bài, viết project | Nhiều nhất, đây là thứ bạn dùng hằng ngày |
| **YAML frontmatter** | Phần `--- ... ---` đầu mỗi file `.md`, khai báo tiêu đề, ngày, tag | Cần biết |
| **HTML** | Khung trang | Đọc hiểu được là đủ |
| **CSS** | Màu sắc, font, bố cục | Biết sửa biến màu/font; học thêm nếu thích |
| **TypeScript / JavaScript** | Logic nhỏ: lọc bài nháp, sắp xếp, sinh trang | Đọc hiểu; không cần viết nhiều |
| **Astro** (`.astro`) | Ghép tất cả lại: một file `.astro` = HTML + một ít code ở đầu | Học dần qua [docs/02](02-cau-truc-du-an.md) |
| **Node.js + npm** | Chạy Astro trên máy, cài thư viện | Chỉ cần 3 lệnh: `npm install`, `npm run dev`, `npm run build` |
| **Git + GitHub** | Lưu lịch sử thay đổi, đẩy code lên mạng | Cần biết `add`, `commit`, `push` |
| **GitHub Actions** | Robot của GitHub: mỗi lần bạn push thì tự build và deploy | Không cần đụng, đã cấu hình sẵn |

## Vì sao đổi Jekyll sang Astro?

- **Xem trước được trên máy bạn.** Jekyll cần Ruby, cài trên Windows khá cực. Máy bạn đã có
  Node.js nên Astro chạy được ngay.
- **Công thức toán (KaTeX) và tô màu code** có sẵn. Đây là thứ bạn cần nhất khi viết về
  thống kê, credit risk, ML.
- **Kiểm tra frontmatter tự động.** Nếu quên `title` hay ghi sai ngày, Astro báo lỗi ngay
  thay vì âm thầm hiển thị sai.
- **Không phụ thuộc theme của người khác.** Theme `portfolYOU` cũ được nạp từ xa
  (`remote_theme`), muốn sửa gì cũng khó. Giờ mọi thứ nằm trong repo của bạn.
- Kỹ năng HTML/CSS/TypeScript dùng được ở nơi khác. Ví dụ sau này bạn muốn làm dashboard
  hay demo ML bằng web.

## Lộ trình học gợi ý

1. **Tuần 1:** chạy được site trên máy ([01](01-cai-dat-va-chay.md)), viết 1 bài ([03](03-viet-bai-moi.md)), push lên ([06](06-deploy-github-pages.md)).
   Chỉ cần vậy là đủ dùng.
2. **Tuần 2:** đọc [02](02-cau-truc-du-an.md) để hiểu trang được ghép từ đâu. Thử đổi màu, đổi câu giới thiệu.
3. **Khi có project:** làm theo [04](04-them-du-an.md).
4. **Khi muốn sâu hơn:** mở `src/pages/index.astro` và thử thêm một section mới. Tài liệu chính
   thức: https://docs.astro.build

Mẹo: đừng sợ làm hỏng. Mọi thay đổi đều có Git lưu lại, và `npm run dev` báo lỗi rất rõ.
