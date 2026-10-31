# 01 · Cài đặt và chạy trên máy

## Cần có

- **Node.js** ≥ 22 (máy bạn đang có v24). Kiểm tra: `node -v`
- **Git**. Kiểm tra: `git --version`
- **VS Code**. Nên cài thêm extension **Astro** (tô màu file `.astro`) và **Markdown All in One**.

## Lần đầu tiên

Mở terminal trong thư mục project (trong VS Code: ``Ctrl + ` ``), chạy:

```bash
npm install
```

Lệnh này đọc `package.json`, tải các thư viện (Astro, KaTeX, …) về thư mục `node_modules/`.
Thư mục này rất nặng và **không** đưa lên Git (đã khai báo trong `.gitignore`).

## Hằng ngày

```bash
npm run dev
```

Mở http://localhost:4321. Giữ terminal đó chạy. Sửa file `.md` hay `.css` rồi lưu, trình duyệt
tự cập nhật. Dừng bằng `Ctrl + C`.

Ở chế độ `dev`, **bài nháp (`draft: true`) vẫn hiện**, kèm nhãn vàng `DRAFT`, để bạn xem trước.

## Trước khi push (tuỳ chọn nhưng nên làm)

```bash
npm run build     # sinh site thật vào dist/
npm run preview   # xem bản build ở http://localhost:4321
```

Nếu `build` lỗi trên máy bạn thì trên GitHub cũng sẽ lỗi. Sửa xong rồi hãy push.
Bản build **không** chứa bài nháp.

## Lỗi hay gặp

| Thông báo | Nguyên nhân / cách sửa |
| --- | --- |
| `'astro' is not recognized` | Chưa chạy `npm install` |
| `does not match collection schema` / `title: Required` | Frontmatter thiếu trường bắt buộc hoặc sai kiểu. Đọc kỹ tên file và tên trường trong lỗi |
| `Invalid date` | Ngày phải dạng `2026-11-01` |
| `Port 4321 is in use` | Đang có một `npm run dev` khác chạy; tắt nó đi hoặc dùng cổng Astro gợi ý |
| Ảnh không hiện | Ảnh phải nằm trong `public/`, và link bắt đầu bằng `/` (xem [03](03-viet-bai-moi.md)) |
