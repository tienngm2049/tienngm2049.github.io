// Hàm thống kê nhỏ dùng cho widget "cut-off explorer" ở trang chủ.
// Dùng được cả lúc build (vẽ đường cong) lẫn trên trình duyệt (khi kéo thanh trượt).

/** erf theo xấp xỉ Abramowitz–Stegun 7.1.26 (sai số < 1.5e-7) */
export function erf(x: number): number {
  const s = Math.sign(x);
  x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
/** CDF của phân phối chuẩn N(mu, sigma) */
export const normCdf = (x: number, mu: number, sigma: number) => 0.5 * (1 + erf((x - mu) / (sigma * Math.SQRT2)));
/** PDF của phân phối chuẩn */
export const normPdf = (x: number, mu: number, sigma: number) =>
  Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));

// Giả lập một scorecard: điểm của khách "good" và "bad" đều phân phối chuẩn.
export const SIM = {
  good: { mu: 640, sigma: 75 },
  bad: { mu: 535, sigma: 75 },
  badShare: 0.08, // 8% hồ sơ là bad
  min: 350,
  max: 900,
};

/** Approve nếu điểm >= c. Trả về các chỉ số kinh doanh tại cut-off c. */
export function cutoffStats(c: number) {
  const { good, bad, badShare } = SIM;
  const goodDeclined = normCdf(c, good.mu, good.sigma); // FPR
  const badDeclined = normCdf(c, bad.mu, bad.sigma); // TPR
  const approvedGood = (1 - badShare) * (1 - goodDeclined);
  const approvedBad = badShare * (1 - badDeclined);
  const approval = approvedGood + approvedBad;
  return {
    approval,
    badRate: approval > 0 ? approvedBad / approval : 0,
    badDeclined,
    goodDeclined,
  };
}

/** AUC giải tích cho hai phân phối chuẩn cùng sigma */
export function simAuc() {
  const { good, bad } = SIM;
  const d = (good.mu - bad.mu) / Math.sqrt(good.sigma ** 2 + bad.sigma ** 2);
  return normCdf(d, 0, 1);
}
