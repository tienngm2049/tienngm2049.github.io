# 06 · Git và deploy lên GitHub Pages

## Bức tranh tổng thể

```
Máy bạn                         GitHub                                  Internet
──────────                      ──────────────────────────              ─────────────────────
sửa file .md
git commit  ──── git push ───▶  repo tienngm2049.github.io (main)
                                      │
                                      ▼ tự kích hoạt
                                GitHub Actions (.github/workflows/deploy.yml)
                                  1. npm install
                                  2. npm run build  → thư mục dist/
                                  3. đăng dist/ lên Pages ───────────▶  https://tienngm2049.github.io
```

Mất khoảng 1–2 phút từ lúc push đến lúc site cập nhật.

## Cài đặt một lần duy nhất (trên github.com)

Site cũ dùng Jekyll và GitHub tự build nó. Site mới cần đổi sang chế độ build bằng Actions:

1. Vào https://github.com/tienngm2049/tienngm2049.github.io → **Settings** → **Pages**
2. Mục **Build and deployment** → **Source**: chọn **GitHub Actions**
3. Xong. Từ giờ mỗi lần push lên `main` là site tự cập nhật.

⚠️ Nếu quên bước này, GitHub sẽ cố build bằng Jekyll như cũ và báo lỗi, hoặc hiện trang trắng.

## Git cơ bản: 5 lệnh dùng 95% thời gian

```bash
git status                     # đang thay đổi những file nào?
git add .                      # đánh dấu tất cả thay đổi để chuẩn bị lưu
git commit -m "post: gini auc ks"   # lưu một "phiên bản", kèm mô tả ngắn
git push                       # đẩy lên GitHub, kích hoạt deploy
git log --oneline -10          # xem 10 phiên bản gần nhất
```

Quy ước message commit gợi ý: `post: ...`, `project: ...`, `style: ...`, `fix: ...`.

## Nhánh `revamp` (lần chuyển đổi này)

Toàn bộ site mới đang nằm ở nhánh `revamp` trên máy bạn, chưa push. Khi đã xem kỹ và ưng ý:

```bash
git add .
git commit -m "Rebuild site with Astro"
git checkout main
git merge revamp
git push origin main
```

Rồi làm bước "Cài đặt một lần duy nhất" ở trên. Nếu muốn an toàn hơn: `git push origin revamp`,
tạo Pull Request trên GitHub để xem lại toàn bộ thay đổi, rồi bấm Merge.

## Kiểm tra deploy

- Tab **Actions** của repo: dấu ✅ xanh là thành công, ❌ đỏ là lỗi. Bấm vào để xem log. Lỗi
  thường giống hệt lỗi `npm run build` trên máy bạn.
- Site không đổi sau khi deploy xong: thử `Ctrl + F5` để bỏ cache trình duyệt.

## Lỡ tay thì sao?

| Tình huống | Lệnh |
| --- | --- |
| Sửa hỏng một file, chưa commit, muốn quay lại | `git restore <file>` |
| Đã commit nhưng chưa push, muốn sửa message | `git commit --amend -m "message mới"` |
| Đã push một commit lỗi | `git revert <mã-commit>` rồi `git push` (tạo commit đảo ngược, an toàn) |

Tránh dùng `git push --force` lên `main`.

## Tên miền riêng (tuỳ chọn, sau này)

Mua domain (ví dụ `tiennguyen.dev`), thêm file `public/CNAME` chứa đúng một dòng là tên miền,
cấu hình DNS theo https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site,
rồi sửa `site:` trong `astro.config.mjs`.
