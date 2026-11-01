# 05 · Tuỳ biến giao diện

## Đổi chữ trên trang

| Muốn đổi | File |
| --- | --- |
| Tên, câu headline to ở trang chủ, đoạn giới thiệu, địa điểm | `src/config.ts` → `SITE` |
| Link GitHub / LinkedIn / Email | `src/config.ts` → `SOCIALS` (xoá dòng nào không muốn hiện) |
| Menu trên cùng | `src/config.ts` → `NAV` |
| Kinh nghiệm, học vấn, kỹ năng | `src/data/about.ts` |
| Đoạn "What I work on" trang About | `src/pages/about.astro` |
| Đoạn giới thiệu ở trang chủ | `src/config.ts` → `ABOUT_HOME` |
| Thẻ kinh nghiệm ở trang chủ | `src/data/about.ts` → `summary`, `tech` của từng mục |
| Ảnh đại diện (trang About) | Thay `public/images/profile.jpg`, tỉ lệ **3:4**, khoảng 600×800px |

## Ngôn ngữ thiết kế: góc cắt chéo

Cả site dùng chung một "chữ ký" thị giác:

- **Góc cắt chéo (chamfer):** thẻ, nút, ảnh đại diện, khối code đều bị cắt chéo góc trên-trái và
  dưới-phải. Hai góc cắt được tô màu nhấn.
- **Nhãn mono** dạng `// ABOUT`, `// CONTENTS` (class `kicker`).
- **Hình bình hành nhỏ** màu nhấn ở logo, trước tiêu đề `##` trong bài và trước năm ở trang Writing.
- **Nền lưới mờ** và **vạch chéo** (`repeating-linear-gradient(-45deg, ...)`) ở tiêu đề section, sau widget và khối liên hệ.
- **Lưới sáng theo chuột** (`.grid-glow`): một lớp lưới thứ hai màu nhấn chỉ lộ ra trong vòng tròn
  quanh con trỏ. Đổi bán kính ở 2 chỗ `150px circle` (vùng lưới sáng) và `170px circle` (quầng màu nhẹ)
  trong `global.css`. Chỉ bật trên máy có chuột, tắt khi người dùng chọn giảm chuyển động.

Muốn phần tử nào có góc cắt, chỉ cần thêm `class="cut"`:

```html
<div class="cut" style="--cut: 20px; padding: 1rem">Nội dung</div>
```

| Biến | Ý nghĩa | Mặc định |
| --- | --- | --- |
| `--cut` | Độ lớn góc cắt | `12px` |
| `--cut-bg` | Màu nền bên trong | `var(--surface)` |
| `--cut-bc` | Màu viền | `var(--border)` |
| `--cut-accent` | Màu hai góc chéo | màu nhấn |

Cách làm: `clip-path: polygon(...)` cắt hình, `::before` vẽ viền, `::after` vẽ nền nhỏ hơn 1px.
Xem phần **"3. Hệ góc cắt chéo"** trong `global.css`. Lưu ý: phần tử có `clip-path` thì không dùng
được `box-shadow` hay `border` thường (sẽ bị cắt mất).

## Trang chủ hoạt động thế nào

Ý tưởng: trang chủ là một **"model report"** về chính bạn, đúng kiểu tài liệu dân credit risk hay viết.

| Phần | Nội dung | Sửa ở đâu |
| --- | --- | --- |
| Dải HUD trên cùng | Địa điểm, toạ độ, giờ Hà Nội (JS cập nhật mỗi 30 giây) | `src/pages/index.astro` |
| Hero | Tên (chữ cuối viền rỗng), headline, intro, nút; bên phải là widget kéo cut-off | `SITE` trong `src/config.ts` |
| Dải kỹ năng chạy ngang | Lấy từ `SKILLS`, rê chuột vào thì dừng | `src/data/about.ts` |
| §01 Model card | Đoạn giới thiệu + bảng `model_card.yaml` + 4 ô số liệu | `ABOUT_HOME`, `MODEL_CARD`, `STATS` trong `config.ts` |
| §02 Training log | Timeline ngang (dọc trên điện thoại), mỗi job là một "epoch", job hiện tại nhấp nháy | `EXPERIENCE` trong `about.ts` |
| §03 Validation set | Lưới bento: project đầu to gấp đôi, 2 project nhỏ bên cạnh | Frontmatter project (`status: featured` để lên đầu) |
| §04 Notes | 5 bài mới nhất đánh số `001…` + khối **Now** | `NOW` trong `config.ts` |
| Khối liên hệ | Câu mời + nút email | `src/pages/index.astro` |

Tiêu đề section là component `src/components/SecHead.astro` (số `§01`, tên, vạch chéo, nhãn nhỏ):
`<SecHead n="§01" title="Model card" note="about me" />`. CSS ở mục **13** trong `global.css`.

### Ẩn dụ "model" ở các trang khác

| Trang | Ẩn dụ | Sửa ở đâu |
| --- | --- | --- |
| About | "Full model documentation": §1 Purpose, §2 Training history, §3 Evaluation, §4 Data sources, §5 Feature set, §6 Multilingual support (thẻ ngoại ngữ, sửa `LANGUAGES` trong `about.ts`), §7 Benchmarks passed | `src/pages/about.astro` |
| 404 | "Out-of-distribution input": đường dẫn lạ nằm ở đuôi phân phối, cách 7.4σ | `src/pages/404.astro` |
| Footer | `last retrained: <ngày build>`, tự đổi mỗi lần deploy | `src/components/Footer.astro` |
| Trang project | Dải ô **validation metrics** (Gini, KS, PSI…) dưới tiêu đề | Trường `metrics` trong frontmatter (xem docs/04) |


## Đổi màu

Mở `src/styles/global.css`. Ở đầu file có các **biến CSS**:

```css
:root {
  --bg: #f3f6f9;       /* nền */
  --text: #0d1b2a;     /* chữ */
  --accent: #0b7a68;   /* màu nhấn: link, nút, nhãn */
  ...
}
```

**Mặc định nền sáng:** thẻ `<html data-theme="light">` trong `src/layouts/Base.astro`. Người xem bấm nút ◐
thì site nhớ lựa chọn của họ. Muốn mặc định nền tối thì đổi thành `data-theme="dark"`; muốn theo
cài đặt máy người xem thì xoá hẳn thuộc tính `data-theme`.

Nền sáng dùng tông **"Blueprint"**: nền trắng xanh lạnh `#f3f6f9`, chữ mực navy `#0d1b2a`, lưới ánh xanh dương,
cùng họ màu với nền tối navy (tránh tông kem ấm vốn dễ trông giống các sản phẩm khác).

Đổi `--accent` là đổi được "màu thương hiệu" của cả site. Nhớ đổi luôn bản dark mode (khối
`[data-theme='dark']` và khối `@media (prefers-color-scheme: dark)`, hai khối có cùng giá trị).

Chọn màu: https://oklch.com hoặc https://coolors.co. Kiểm tra độ tương phản chữ/nền tại
https://webaim.org/resources/contrastchecker (nên ≥ 4.5:1).

## Đổi font

1. Chọn font ở https://fonts.google.com
2. Sửa link Google Fonts trong `src/layouts/Base.astro` (thẻ `<link rel="stylesheet" href="https://fonts.googleapis.com/...">`)
3. Sửa `--font-sans` / `--font-head` / `--font-mono` trong `global.css`

### Font đang dùng

| Vai trò | Font | Biến CSS | Ở đâu |
| --- | --- | --- | --- |
| Tiêu đề, tên to ở trang chủ, menu, nhãn nhỏ, nút | **Saira** | `--font-head` | h1/h2/h3, `kicker`, menu, `.button` |
| Chữ thường, đoạn văn, thân bài | **Poppins** (font gốc của site cũ) | `--font-sans` | Thân bài, mô tả, danh sách |
| Code, ngày tháng, con số dữ liệu | **JetBrains Mono** | `--font-mono` | Khối code, ngày đăng, `§01`, số trong widget |
| Công thức toán | **KaTeX Main / KaTeX Math** | (KaTeX tự nạp) | Mọi thứ trong `$...$` và `$$...$$` |

Vì sao phối như vậy: Saira vuông, hẹp, "kỹ thuật", hợp với góc cắt chéo và tạo ấn tượng đầu tiên.
Poppins tròn, thoáng, dễ đọc bài dài. Danh sách phần tử dùng Saira nằm ở mục **15** trong
`global.css`. Muốn quay lại Poppins cho tiêu đề thì đổi `--font-head` thành `'Poppins', ...`.

Ba font đầu đều hỗ trợ tiếng Việt và được nạp từ Google Fonts.

### Font công thức toán

KaTeX chỉ có **một bộ font**, là font kiểu Computer Modern quen thuộc của LaTeX. Nếu muốn
công thức trông khác đi thì có hai cách:

1. **Giữ KaTeX, chỉ chỉnh bằng CSS:** to/nhỏ hơn, đổi màu. Ví dụ thêm vào `global.css`:
   ```css
   .katex { font-size: 1.08em; }
   .katex-display { color: var(--accent); }
   ```
2. **Đổi sang MathJax 4:** cách này cho chọn font, ví dụ `mathjax-fira` (sans, hiện đại, hợp với
   Poppins), `mathjax-stix2` (kiểu Times, sang), `mathjax-tex` (truyền thống). Đổi lại, trang sẽ
   nặng hơn và render chậm hơn KaTeX một chút.

Gợi ý: với người đọc làm DS/risk, font toán truyền thống là thứ họ đọc quen nhất, lại hợp với
tiêu đề sans. Chỉ nên đổi nếu bạn thật sự muốn phong cách riêng.

## Thêm một trang mới (ví dụ `/now/`)

Tạo `src/pages/now.astro`:

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="Now">
  <h1>What I'm doing now</h1>
  <p>Learning stochastic processes, building a PD scorecard…</p>
</Base>
```

Muốn nó hiện trên menu thì thêm `{ label: 'Now', href: '/now/' }` vào `NAV` trong `src/config.ts`.

## Học CSS ở đâu?

- https://web.dev/learn/css: miễn phí, bài bản
- Trick hay nhất: bấm chuột phải → **Inspect** trên trình duyệt, sửa thử CSS trực tiếp, ưng rồi
  mới chép vào `global.css`.
