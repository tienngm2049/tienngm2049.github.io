# Hướng dẫn nhanh: thêm bài viết, project, ảnh

Trang này là **bản tóm tắt để dùng hằng ngày**. Muốn hiểu sâu hơn thì đọc `docs/00` → `docs/06`.

Mọi lệnh bên dưới gõ trong terminal của VS Code, ở thư mục `E:\tiennm9.github.io`.

---

## 0. Bốn lệnh cần nhớ

| Lệnh | Để làm gì |
| --- | --- |
| `npm run dev` | Mở site trên máy ở http://localhost:4321. Sửa file là trang tự cập nhật |
| `npm run new:post -- "Tiêu đề"` | Tạo bài viết mới (file + thư mục ảnh) |
| `npm run new:project -- "Tên project"` | Tạo project mới (file + thư mục ảnh) |
| `npm run images` | Thu nhỏ ảnh quá to trước khi đăng |

Đăng lên mạng luôn là 3 dòng:

```bash
git add .
git commit -m "Mô tả ngắn việc vừa làm"
git push
```

Đợi 1–2 phút rồi mở https://tienngm2049.github.io. Nếu không thấy thay đổi: tab **Actions** trên GitHub.

---

## 1. Viết bài mới (checklist)

```bash
npm run new:post -- "Gini, AUC and KS explained"
```

Lệnh trên tạo sẵn:
- `src/content/posts/gini-auc-and-ks-explained.md` ← file bài viết, đã có khung mẫu
- `public/images/gini-auc-and-ks-explained/` ← thư mục để bỏ ảnh của bài

Sau đó:

- [ ] Mở file `.md` vừa tạo, sửa `description` (1 câu) và `tags`
- [ ] Viết nội dung. Chia mục bằng `##`, mục con `###` (mục lục tự sinh từ đây)
- [ ] Bỏ ảnh vào thư mục ảnh, chèn vào bài (xem **mục 3**)
- [ ] Xem trước ở `npm run dev` (bài nháp có nhãn DRAFT, chỉ bạn thấy)
- [ ] Đổi `draft: true` → `draft: false`
- [ ] Bài tốt nhất thì thêm `featured: true` để lên mục "Start here" ở trang Writing
- [ ] `npm run images` → `git add .` → `git commit -m "Add post: ..."` → `git push`

### Cú pháp hay dùng

```markdown
## Tiêu đề mục

Chữ **đậm**, *nghiêng*, `code`, [link](https://example.com).

- gạch đầu dòng
1. đánh số

> Trích dẫn / ghi chú

Công thức trong dòng: $\text{Gini} = 2\,\text{AUC} - 1$

Công thức riêng một dòng:

$$
\text{KS} = \max_s |F_{bad}(s) - F_{good}(s)|
$$

| Cột A | Cột B |
| --- | --- |
| 1 | 2 |
```

Code: ba dấu backtick kèm tên ngôn ngữ (`python`, `sql`, `bash`, `r`):

````markdown
```python
gini = 2 * roc_auc_score(y, p) - 1
```
````

---

## 2. Thêm project mới (checklist)

**Bước A: làm project ở repo GitHub riêng** (notebook, code, README, kết quả).
Website chỉ chứa bài *case study* kể lại project, và link sang repo.

**Bước B: tạo trang case study**

```bash
npm run new:project -- "Credit risk PD scorecard"
```

- [ ] Điền các trường ở đầu file:

| Trường | Ghi gì | Hiện ở đâu |
| --- | --- | --- |
| `description` | 1 câu | Thẻ project |
| `status` | `featured` (lên trang chủ), `active`, `archive` | Thứ tự, nhãn |
| `problem` / `approach` / `outcome` | Mỗi cái 1 câu. `outcome` nên **có số** | Khung xanh đầu trang |
| `stack` | `[Python, LightGBM, ...]` | Chip công nghệ |
| `metrics` | Gini, KS, PSI… (**chỉ số từ dữ liệu public**) | Dải ô số liệu dưới tiêu đề |
| `repo` | Link repo GitHub của project | Nút "Code on GitHub" |
| `demo` | Link app/dashboard (nếu có) | Nút "Live demo" |
| `cover` | Ảnh bìa (xem **mục 3.4**) | Thẻ project + đầu trang |

- [ ] Viết theo khung 7 mục có sẵn: Business question → … → Limitations
- [ ] Thêm biểu đồ (ROC, calibration, feature importance…) theo **mục 3**
- [ ] `draft: false` → `npm run images` → commit → push

Ví dụ `metrics`:

```yaml
metrics:
  - { label: Gini, value: "0.52", note: "out-of-time sample" }
  - { label: KS, value: "0.38", note: "max separation good vs bad" }
```

---

## 3. Ảnh minh hoạ

### 3.1 Ảnh để ở đâu, gọi thế nào

```
public/images/<tên-bài>/roc-curve.png        ← file thật
/images/<tên-bài>/roc-curve.png              ← đường dẫn dùng trong bài (bỏ "public", bắt đầu bằng /)
```

`<tên-bài>` chính là tên file `.md` (không có `.md`). Lệnh `new:post` / `new:project` đã tạo sẵn thư mục này.

**Đặt tên file ảnh:** chữ thường, không dấu, không khoảng trắng, nối bằng `-`.
✅ `roc-curve.png`, `calibration-plot.png` ❌ `Ảnh 1.png`, `Screenshot 2026-11-01 at 10.32.png`

### 3.2 Chèn ảnh vào bài

```markdown
![ROC curve of the LightGBM challenger on the OOT sample](/images/gini-auc-and-ks-explained/roc-curve.png)
*Figure 1: ROC curve on the out-of-time sample. Gini = 0.52.*
```

- Dòng 1: ảnh. Chữ trong `[...]` là **mô tả cho người không xem được ảnh** và cho Google. Viết đủ ý, đừng để trống.
- Dòng 2 (ngay dưới, không cách dòng): **chú thích**, viết nghiêng bằng `*...*`. Site tự căn giữa và làm mờ chữ.
- Đánh số `Figure 1, 2, 3…` để trong bài nhắc lại được: "như Figure 2 cho thấy…".

### 3.3 Kích thước và định dạng

| Loại ảnh | Định dạng | Kích thước gợi ý |
| --- | --- | --- |
| Biểu đồ, sơ đồ, ảnh chụp màn hình | **PNG** | Rộng 1200–1600px |
| Ảnh chụp thật | **JPG** | Rộng ≤ 1600px |
| Ảnh bìa project | PNG/JPG | **1600 × 800** (tỉ lệ 2:1) |

Không cần tự canh: chạy `npm run images` trước khi push. Lệnh này tự thu ảnh rộng > 1600px
về 1600px và nén ảnh > 400KB, ghi đè tại chỗ nên không phải sửa link.

### 3.4 Ảnh bìa project (`cover`)

```yaml
cover: /images/credit-risk-pd-scorecard/cover.png
```

- Tỉ lệ **2:1** (vd 1600×800). Trên thẻ project ảnh bị cắt bớt trên/dưới, nên **để nội dung chính ở giữa**.
- Ảnh bìa đẹp nhất là **một biểu đồ "đinh" của project** (ROC, phân phối điểm, bản đồ…), ít chữ.
- Không có `cover` cũng được: site **tự vẽ hình minh hoạ** dựa theo tags (ROC, scatter, cột…).

### 3.5 Xuất biểu đồ từ Python cho đẹp

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 5))          # 8x5 inch, tỉ lệ dễ nhìn
# ... vẽ ...
ax.spines[["top", "right"]].set_visible(False)  # bỏ khung trên/phải cho gọn
ax.set_title("ROC curve, OOT sample")
fig.savefig("roc-curve.png", dpi=200, bbox_inches="tight", facecolor="white")
```

- `dpi=200`: đủ nét trên màn hình đẹp; `npm run images` sẽ lo phần dung lượng.
- `facecolor="white"`: **giữ nền trắng**. Nền trong suốt sẽ làm chữ đen biến mất khi người đọc dùng dark mode.
- Mỗi hình **một ý**. Nhiều subplot quá thì tách thành nhiều hình.

### 3.6 ⚠️ Không bao giờ đăng

Ảnh chụp dashboard thật của công ty, bảng có số liệu nội bộ, tên khách hàng, tên bảng/hệ thống
nội bộ. Repo này **public**: ai cũng xem được cả lịch sử file, kể cả khi đã xoá.

---

## 4. Sửa thông tin cá nhân

| Muốn sửa | File |
| --- | --- |
| Câu giới thiệu, headline, link mạng xã hội | `src/config.ts` → `SITE`, `SOCIALS` |
| Đoạn About + bảng Model card ở trang chủ | `src/config.ts` → `ABOUT_HOME`, `MODEL_CARD` |
| Khối "Now" (đang làm gì) | `src/config.ts` → `NOW` |
| 4 ô số liệu trang chủ | `src/config.ts` → `STATS` |
| Kinh nghiệm, học vấn, giải thưởng, kỹ năng, ngoại ngữ, chứng chỉ | `src/data/about.ts` |
| Ảnh đại diện | Ghi đè `public/images/profile.jpg` (tỉ lệ **3:4**, khoảng 600×800) |
| File CV | Bỏ vào `public/cv.pdf`, rồi sửa `cvUrl: '/cv.pdf'` trong `src/config.ts` |

---

## 5. Lỗi hay gặp

| Triệu chứng | Nguyên nhân thường gặp | Cách sửa |
| --- | --- | --- |
| Terminal báo lỗi đỏ có chữ `frontmatter` / `schema` | Phần đầu file sai | Tiêu đề có `:` phải bọc `"..."`; ngày dạng `2026-11-15`; `tags: [a, b]` |
| Ảnh không hiện (biểu tượng ảnh vỡ) | Sai đường dẫn | Bắt đầu bằng `/images/...`, không có `public`; đúng hoa/thường; đúng đuôi `.png`/`.jpg` |
| Công thức hiện nguyên chữ `$...$` | Thiếu dòng trống quanh `$$` | Để một dòng trống trước và sau khối `$$ ... $$` |
| Bài không hiện trên site thật | Còn `draft: true` | Đổi thành `false`, push lại |
| Push xong site không đổi | Build lỗi trên GitHub | Tab **Actions** → bấm vào lần chạy đỏ → đọc dòng lỗi |
| `npm` không chạy được sau khi đổi máy | Chưa cài thư viện | `npm install` |

Bí quá: copy nguyên thông báo lỗi, hỏi Claude/Google kèm câu "Astro".
