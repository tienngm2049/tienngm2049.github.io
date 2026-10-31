// Dữ liệu trang About (lấy từ CV, đã bỏ phần không nên công khai).
// Trường `period` để trống '' thì sẽ không hiển thị.
// ⚠️ Website là PUBLIC: không đưa số liệu nội bộ (ngưỡng model, số lead, approval rate...),
//    số điện thoại, lương... lên đây.

export const FULL_NAME = 'Nguyen Manh Tien';

export const EXPERIENCE = [
  {
    role: 'Senior Business Intelligence Analyst',
    org: 'Techcombank',
    period: 'Oct 2025 – present',
    // `summary` + `tech`: dùng cho thẻ kinh nghiệm ở trang chủ
    summary:
      'Build propensity and connection models (LightGBM, calibrated with Platt / isotonic) that prioritise telesales outreach, plus lead-generation pipelines and performance monitoring for credit cards, overdrafts and personal loans.',
    tech: ['LightGBM', 'Calibration', 'PySpark', 'Databricks', 'SQL', 'Power BI'],
    points: [
      'Analytics and monitoring for acquisition, conversion, approval and portfolio performance across credit cards, overdrafts and personal loans.',
      'Telesales connection model (LightGBM) with threshold optimisation and probability calibration (Platt scaling, isotonic regression) to focus outreach on reachable customers.',
      'Approval-propensity model for non-pre-approved customers, feeding monthly telesales lead lists for personal loan and credit card cross-sell.',
      'Digital lead-generation pipelines combining transactional, behavioural, demographic and campaign data; K-Means segmentation for campaign and portfolio strategy.',
      'Churn, funnel and approval-rate analysis for low-score segments, aligned with risk objectives, working with product, marketing, risk and sales teams.',
    ],
  },
  {
    role: 'Business Intelligence Analyst',
    org: 'Techcombank',
    period: 'Jun 2024 – Oct 2025',
    summary:
      'Took ownership of the approval-propensity and telesales-prioritisation models alongside funnel, churn and approval-rate analysis for lending products; promoted to Senior.',
    tech: ['Python', 'Scikit-learn', 'K-Means', 'SQL'],
    points: ['Same scope; promoted after taking ownership of the propensity and telesales-prioritisation models.'],
  },
  {
    role: 'Business Intelligence Contractor',
    org: 'Techcombank',
    period: 'Feb 2024 – May 2024',
    summary: 'Built BI reports and dashboards for lending portfolio performance before converting to a full-time analyst role.',
    tech: ['Power BI', 'DAX', 'SQL'],
    points: ['BI reports and dashboards for lending portfolio performance.'],
  },
];

export const EDUCATION = [
  { degree: 'MSc in Data Science (part-time)', org: 'VNU University of Science', period: 'in progress' },
  { degree: 'Bachelor of Economics, International Trade', org: 'Foreign Trade University · Distinction', period: '2016 – 2020' },
];

export const AWARDS = [
  { title: 'Star of June', org: 'Data & Analytics Division, Techcombank', date: 'Jun 2026' },
  { title: "People's Choice Award", org: 'MFT Unsecured Lending, Techcombank', date: 'Dec 2025' },
];

export const CERTIFICATIONS = [
  { title: 'Data Scientist Professional', org: 'DataCamp', date: '2025' },
  { title: 'Data Analyst Professional', org: 'DataCamp', date: '2023' },
  { title: 'Google Advanced Data Analytics', org: 'Google', date: '2023' },
  { title: 'IBM Data Analyst', org: 'IBM', date: '2023' },
  { title: 'Statistics with Python', org: 'University of Michigan', date: '2023' },
  { title: "CS50's Introduction to Programming with Python & SQL", org: 'Harvard', date: '2023' },
  { title: 'SQL (Advanced)', org: 'HackerRank', date: '2023' },
];

// Ngoại ngữ: hiện thành mục riêng trên trang About.
// glyph = chữ lớn trang trí trên thẻ; score/exam = điểm và tên kỳ thi (score để '' nếu không có)
export const LANGUAGES = [
  { name: 'English', glyph: 'EN', score: '8.0', exam: 'IELTS Academic' },
  { name: 'Chinese', glyph: '中文', score: '5', exam: 'HSK' },
  { name: 'Vietnamese', glyph: 'VI', score: '', exam: 'Native' },
];

export const SKILLS = [
  { group: 'Machine learning', items: ['LightGBM', 'XGBoost', 'Random Forest', 'Probability calibration', 'K-Means', 'PCA'] },
  { group: 'Statistics', items: ['Hypothesis testing', 'A/B test design', 'Power analysis', 'SciPy', 'Pingouin'] },
  { group: 'Data engineering', items: ['Python', 'SQL', 'PySpark', 'Databricks', 'Schema design'] },
  { group: 'BI & visualisation', items: ['Power BI (DAX, semantic models)', 'Matplotlib', 'Seaborn'] },
  { group: 'Domain', items: ['Unsecured lending', 'Credit cards', 'Acquisition funnels', 'Telesales prioritisation'] },
];

export const INTERESTS = [
  'Credit risk modelling (PD / scorecards, validation, monitoring)',
  'Decision science & optimisation',
  'Stochastic processes and probabilistic modelling',
  'Production ML systems',
];
