# tienngm2049.github.io

Website cá nhân: blog và portfolio các dự án Data Science / Credit Risk / ML.
Live: https://tienngm2049.github.io

Site được dựng bằng [Astro](https://astro.build): bài viết và project là file Markdown,
GitHub Actions tự build rồi deploy lên GitHub Pages mỗi khi push lên nhánh `main`.

> 📌 **Dùng hằng ngày:** [docs/HUONG-DAN-NHANH.md](docs/HUONG-DAN-NHANH.md): checklist viết bài,
> thêm project, chèn ảnh minh hoạ, sửa thông tin, lỗi hay gặp. Gói gọn trong một trang.

## Chạy nhanh

```bash
npm install      # lần đầu tiên: tải thư viện về thư mục node_modules/
npm run dev      # mở http://localhost:4321, sửa file nào là trang tự reload
npm run build    # build bản thật vào thư mục dist/ (giống những gì GitHub sẽ build)

npm run new:post -- "Tiêu đề bài"        # tạo bài mới + thư mục ảnh
npm run new:project -- "Tên project"     # tạo project mới + thư mục ảnh
npm run images                           # thu nhỏ ảnh quá to trước khi push
```

## Việc hay làm

| Muốn làm gì | Làm ở đâu |
| --- | --- |
| Viết bài mới | `npm run new:post -- "Tiêu đề"` (xem [docs/03](docs/03-viet-bai-moi.md)) |
| Thêm project | `npm run new:project -- "Tên"` (xem [docs/04](docs/04-them-du-an.md)) |
| Thêm ảnh | Bỏ vào `public/images/<tên-bài>/`, chèn `![mô tả](/images/<tên-bài>/a.png)` ([hướng dẫn ảnh](docs/HUONG-DAN-NHANH.md#3-ảnh-minh-hoạ)) |
| Sửa tên, giới thiệu, link | `src/config.ts` |
| Sửa trang About | `src/data/about.ts` |
| Đổi màu, font | `src/styles/global.css` (phần `:root`) |
| Đăng lên mạng | `git push` lên `main` (xem [docs/06](docs/06-deploy-github-pages.md)) |

## Thiết kế

**Ý tưởng:** trang chủ là một bản **"model report"** về chính mình: Model card (About),
Training log (Experience), Validation set (Projects), Notes (Writing). Các trang khác đi theo
cùng ẩn dụ: About là "Full model documentation", trang 404 là "out-of-distribution input",
footer có dòng `last retrained: <ngày build>`.

**Hình khối:** góc cắt chéo (chamfer) cho thẻ, nút, ảnh, khối code; vạch chéo ở tiêu đề
section; nền lưới sáng lên quanh con trỏ chuột.

**Font:**

| Vai trò | Font |
| --- | --- |
| Tiêu đề, tên to ở trang chủ, menu, nhãn nhỏ, nút | **Saira** |
| Chữ thường, đoạn văn, thân bài | **Poppins** (font gốc của site cũ) |
| Code, ngày tháng, con số | **JetBrains Mono** |
| Công thức toán | **KaTeX** (kiểu LaTeX truyền thống) |

Saira vuông và "kỹ thuật", hợp với góc cắt chéo, tạo ấn tượng đầu tiên. Poppins tròn và
thoáng, dễ đọc bài dài. Cả ba font đều hỗ trợ tiếng Việt và được nạp từ Google Fonts. Chi tiết
và cách đổi font: [docs/05](docs/05-tuy-bien-giao-dien.md).

## Hướng dẫn vừa học vừa làm

Đọc theo thứ tự:

0. [Bắt đầu từ đây: site này dùng những công nghệ gì](docs/00-bat-dau-tu-day.md)
1. [Cài đặt và chạy trên máy](docs/01-cai-dat-va-chay.md)
2. [Cấu trúc thư mục, file nào làm gì](docs/02-cau-truc-du-an.md)
3. [Viết bài mới (Markdown, công thức toán, code, ảnh)](docs/03-viet-bai-moi.md)
4. [Thêm project mới (quy trình GitHub repo + case study)](docs/04-them-du-an.md)
5. [Tuỳ biến giao diện](docs/05-tuy-bien-giao-dien.md)
6. [Git và deploy lên GitHub Pages](docs/06-deploy-github-pages.md)

Mẫu có sẵn để copy: [`docs/templates/`](docs/templates/).

## License

Code: MIT (xem `LICENSE`). Nội dung bài viết thuộc về tác giả.
