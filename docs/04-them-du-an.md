# 04 · Thêm project mới

## Nguyên tắc: code ở repo riêng, website là "case study"

```
github.com/tienngm2049/credit-risk-pd-scorecard     ← CODE: notebook, src/, README, requirements
                    │
                    │  link "Code on GitHub ↗"
                    ▼
tienngm2049.github.io/projects/credit-risk-pd-scorecard/   ← CÂU CHUYỆN: bài toán, cách làm, kết quả
```

**Vì sao không nhúng nguyên notebook vào website?**

- Người tuyển dụng thường chỉ đọc 2–3 phút. Họ cần thấy *bạn nghĩ thế nào*: bạn đặt bài toán
  ra sao, chọn phương pháp vì lý do gì, kết quả dùng để ra quyết định gì. Notebook 200 cell
  không cho thấy điều đó.
- Người kỹ thuật (lead DS phỏng vấn bạn) sẽ bấm sang repo để xem code. Code sạch + README tốt
  ở repo là một tín hiệu riêng.
- Website nhẹ, đẹp, dễ đọc trên điện thoại; repo thì đầy đủ, chạy lại được.

## Quy trình cho một project

### 1. Repo GitHub (phần code)

Cấu trúc gợi ý:

```
credit-risk-pd-scorecard/
├── README.md            ← tóm tắt 1 màn hình: bài toán, kết quả chính, cách chạy, link sang bài trên website
├── requirements.txt     ← (hoặc pyproject.toml) để người khác cài lại được
├── data/README.md       ← mô tả + link tải dataset (KHÔNG commit file data lớn)
├── notebooks/
│   ├── 01_eda.ipynb
│   ├── 02_binning_woe.ipynb
│   └── 03_model_validation.ipynb
├── src/                 ← code tái sử dụng tách khỏi notebook (features.py, metrics.py…)
└── reports/figures/     ← ảnh xuất ra để dùng trong bài viết
```

Một vài điểm cộng mà người phỏng vấn DS hay để ý:

- Code xử lý lặp lại được đưa vào `src/` dưới dạng hàm, không copy-paste giữa các notebook.
- Cố định `random_state`; có ghi cách chia train/test/out-of-time.
- Có vài test nhỏ (`pytest`) cho các hàm tính metric hay biến đổi feature.
- README trả lời được câu hỏi: *"Nếu tôi chỉ có 1 phút thì cần biết gì?"*

### 2. File project trên website (phần câu chuyện)

Chạy `npm run new:project -- "Tên project"` (hoặc copy [`templates/project.md`](templates/project.md) vào `src/content/projects/<ten-project>.md`).
Ảnh bìa và biểu đồ: xem [HUONG-DAN-NHANH mục 3](HUONG-DAN-NHANH.md#3-ảnh-minh-hoạ).

Ba trường frontmatter sau hiện thành **khung tóm tắt màu xanh** ở đầu trang, và đây là phần
quan trọng nhất:

```yaml
problem: "Một câu: bài toán kinh doanh + biến mục tiêu."
approach: "Một câu: phương pháp chính + cách validate."
outcome: "Một câu CÓ SỐ: Gini 0.52 trên OOT; ở cut-off X, bad rate giảm Y% mà approval rate giữ nguyên."
```

Muốn có **dải ô số liệu** (kiểu "validation metrics") ngay dưới tiêu đề project, thêm `metrics`.
Mỗi ô có `label`, `value` và `note` (tuỳ chọn). Bỏ trống thì dải này không hiện.

```yaml
metrics:
  - { label: Gini, value: "0.52", note: "out-of-time sample" }
  - { label: KS, value: "0.38", note: "max separation good vs bad" }
  - { label: PSI, value: "0.04", note: "train vs OOT drift" }
```

⚠️ `value` là chữ, nên bọc trong `"..."`. Chỉ ghi số tính trên dữ liệu public, không bao giờ ghi số của công ty.

`status`:

- `featured`: hiện ở trang chủ (chỉ nên có 2–4 project như vậy)
- `active`: đang làm, vẫn hiện ở trang Projects
- `archive`: project cũ, hiện ở mục Archive

Cấu trúc thân bài (có sẵn trong template):

1. Business question: ra quyết định gì, sai thì mất gì
2. Problem formulation: đơn vị phân tích, biến mục tiêu, cửa sổ thời gian, công thức
3. Data
4. Method: *vì sao* chọn cách này thay vì cách khác
5. Validation: bảng metric, biểu đồ
6. From model to decision: kết quả được dùng ra sao
7. Limitations & next steps: phần này cho thấy độ chín chắn

### 3. Đưa ảnh từ notebook sang

Trong notebook: `fig.savefig("reports/figures/roc.png", dpi=150, bbox_inches="tight")`, sau đó
copy sang `public/images/<ten-project>/roc.png` của repo website.

## Còn project đã làm ở công ty thì sao?

Đây thường là kinh nghiệm giá trị nhất của bạn, nhưng **dữ liệu và kết quả thuộc về ngân hàng**.
Có hai cách an toàn:

1. **Chỉ viết ở mức phương pháp** (không có số, không có code, không có ảnh thật). Ví dụ:
   *"Telesales connection model: framing contactability as a ranking problem"*. Nói về cách đặt
   bài toán, chọn feature *loại nào*, validate thế nào, rút ra bài học gì. Số liệu cụ thể để dành
   kể trong phòng phỏng vấn, và nói ở mức tương đối.
2. **Làm lại trên dữ liệu công khai**: cùng loại bài toán nhưng dùng dataset public (Home
   Credit Default Risk, Lending Club, Give Me Some Credit, Bank Marketing…). Cách này cho bạn
   một project đầy đủ code + số liệu mà không vi phạm gì.

Không chắc một chi tiết có được nói ra hay không thì **đừng đăng**.

## Gợi ý project cho hướng BI → DS/ML trong ngân hàng

| Project | Dataset public | Cho thấy năng lực gì |
| --- | --- | --- |
| PD scorecard end-to-end (đã có draft) | Home Credit / Lending Club | Credit risk cốt lõi: WoE, logistic, Gini/KS, PSI, cut-off |
| Champion–challenger: Logistic vs LightGBM + SHAP | Như trên | Biết khi nào cần model phức tạp, giải thích được model |
| Uplift / propensity cho cross-sell | Bank Marketing (UCI) | Decision science: nhắm vào ai để tác động lên kết quả |
| Model monitoring (PSI, drift, calibration theo tháng) | Dữ liệu chia theo thời gian | Tư duy production, nối được với nền BI của bạn |
| Survival model cho default / prepayment | Lending Club | Thống kê nâng cao (gắn với môn cao học) |

Một project làm sâu có giá trị hơn năm project làm nông.
