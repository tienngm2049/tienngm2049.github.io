# 03 · Viết bài mới

## Bước 1: tạo file

**Cách nhanh:** `npm run new:post -- "Gini, AUC and KS"`. Lệnh này tạo file từ mẫu, điền sẵn
tiêu đề + ngày, và tạo luôn thư mục ảnh `public/images/<tên-bài>/`.

**Cách thủ công:** tạo `src/content/posts/gini-auc-ks.md`. **Tên file = đường dẫn**: bài này sẽ ở
`/blog/gini-auc-ks/`. Dùng chữ thường, không dấu, nối bằng `-`.

Có sẵn mẫu: [`docs/templates/post.md`](templates/post.md).

## Bước 2: frontmatter

```yaml
---
title: "Gini, AUC and KS: three numbers in every scorecard report"
description: "What each metric measures, how they relate, and when they disagree."
date: 2026-11-15
tags: [credit-risk, statistics]
lang: en          # hoặc vi nếu viết tiếng Việt
draft: true       # true = chỉ thấy khi npm run dev; đổi false khi muốn đăng
---
```

| Trường | Bắt buộc | Ghi chú |
| --- | --- | --- |
| `title` | ✔ | Có dấu `:` thì bọc trong `"..."` |
| `description` | ✔ | 1 câu; hiện ở danh sách bài và khi share link |
| `date` | ✔ | `YYYY-MM-DD` |
| `updated` | | Ngày sửa lớn |
| `tags` | | Chữ thường, `-` thay khoảng trắng. Mỗi tag tự có trang `/tags/<tag>/` |
| `lang` | | `en` (mặc định) hoặc `vi` |
| `featured` | | `true` = hiện ở mục **Start here** đầu trang Writing. Chỉ chọn 2–4 bài tốt nhất |
| `draft` | | Mặc định `false` |

## Bước 3: viết nội dung bằng Markdown

```markdown
## Tiêu đề mục (dùng ##, vì # đã là tiêu đề bài)

Đoạn văn. **In đậm**, *in nghiêng*, `code`, [link](https://example.com).

- gạch đầu dòng
1. đánh số

> trích dẫn

| Cột A | Cột B |
| --- | --- |
| 1 | 2 |
```

### Công thức toán

Viết LaTeX như trong Overleaf:

```markdown
Inline: $\text{Gini} = 2\,\text{AUC} - 1$.

Block:

$$
\text{KS} = \max_s \left| F_{\text{bad}}(s) - F_{\text{good}}(s) \right|
$$
```

### Code

Ghi tên ngôn ngữ sau ba dấu backtick để code được tô màu:

````markdown
```python
from sklearn.metrics import roc_auc_score
gini = 2 * roc_auc_score(y, p) - 1
```
````

Ngôn ngữ hay dùng: `python`, `sql`, `bash`, `yaml`, `r`.

### Ảnh

1. Bỏ ảnh vào `public/images/<tên-bài>/`, ví dụ `public/images/gini-auc-ks/roc.png`
2. Trong bài: `![ROC curve](/images/gini-auc-ks/roc.png)`. Bỏ chữ `public` đi và **bắt đầu bằng `/`**
3. Chú thích dưới ảnh: dòng ngay sau ảnh ghi `*Figure 1: ROC curve on the OOT sample*`

Ảnh matplotlib/seaborn: `plt.savefig("roc.png", dpi=150, bbox_inches="tight")`.
Trước khi push, chạy `npm run images`: ảnh quá to sẽ tự được thu nhỏ và nén.
Hướng dẫn đầy đủ về ảnh (kích thước, chú thích, ảnh bìa, xuất từ matplotlib): [HUONG-DAN-NHANH mục 3](HUONG-DAN-NHANH.md#3-ảnh-minh-hoạ).

## Những thứ trang bài viết tự làm cho bạn

- **Mục lục:** tự lấy từ các heading `##` và `###`. Trên màn hình rộng, mục lục bám bên phải và
  tô sáng mục đang đọc; trên điện thoại thì thành khung "Table of contents" bấm để mở. Vì vậy
  hãy chia bài bằng `##`, đừng dùng `**chữ đậm**` thay cho tiêu đề.
- **Thời gian đọc:** đếm số từ (bỏ qua code và công thức), tính khoảng 220 từ/phút.
- **Cite as + BibTeX:** để người khác trích dẫn bài của bạn, giống blog của Lilian Weng.
- **Bài cũ hơn / mới hơn** ở cuối bài.

## Bước 4: xem trước, rồi đăng

1. `npm run dev`, vào http://localhost:4321/blog/, bài có nhãn `DRAFT`.
2. Hài lòng thì đổi `draft: false`.
3. Commit và push (xem [06](06-deploy-github-pages.md)).

## Viết gì?

Với mục tiêu chuyển sang DS/ML, các bài có giá trị nhất là:

- **Giải thích kỹ một khái niệm bạn vừa học** (từ môn cao học, từ công việc). Ví dụ: WoE/IV,
  calibration, PSI, reject inference, survival analysis. Người đọc thấy được bạn hiểu sâu đến đâu.
- **"Điều mình học được khi…"**: một bài toán thực tế, chỗ khó, cách bạn nghĩ. Bỏ hết số liệu nội bộ.
- **Bài đồng hành project**: một project lớn có thể tách ra 1–2 bài đi sâu một khía cạnh.

Nên viết bằng tiếng Anh nếu muốn nhà tuyển dụng nước ngoài/ngân hàng nước ngoài đọc. Bài tiếng
Việt thì đặt `lang: vi`.

⚠️ **Không bao giờ đăng:** số liệu nội bộ của công ty (volume, bad rate, approval rate, doanh
thu), tên khách hàng, tên bảng/hệ thống nội bộ, ảnh chụp dashboard thật. Repo này là public.
