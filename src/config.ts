// ===== Thông tin cá nhân của site — sửa ở ĐÂY là đủ, không cần đụng vào layout =====
export const SITE = {
  name: 'Tien Nguyen',
  title: 'Tien Nguyen — Data Science in Banking',
  description:
    'Notes and projects on credit risk modelling, decision science and machine learning in banking.',
  // Dòng chức danh dưới tên ở trang chủ
  role: 'Senior BI Analyst · Data Science',
  // Câu định vị: hiện dưới chức danh
  headline: 'I turn banking questions into models and decisions.',
  // Đoạn ngắn dùng cho trang About / thẻ chia sẻ
  intro:
    'Analytics professional in retail banking (unsecured lending, credit cards, acquisition), studying for an MSc in Data Science. I write about credit risk modelling, statistics and building ML systems that people actually use.',
  location: 'Hanoi, Vietnam',
  // Link CV dạng PDF: bỏ file vào public/cv.pdf rồi ghi '/cv.pdf'. Để '' thì nút CV trỏ sang trang About.
  cvUrl: '',
  // Repo chứa source code website (hiện ở chân trang)
  sourceUrl: 'https://github.com/tienngm2049/tienngm2049.github.io',
  // Google Tag Manager: để '' nếu không muốn tracking
  gtmId: 'GTM-WVWX8BPG',
};

// Mục "About" ở trang chủ: mỗi phần tử là một đoạn văn. Được dùng <strong>, <a>.
export const ABOUT_HOME = [
  `I came to data from economics, and today I build models and analytics for retail lending at
   <strong>Techcombank</strong>: who applies, who gets approved, who is worth a call, who stays,
   and which levers move those numbers.`,
  `My day-to-day sits between business questions and statistics: LightGBM propensity models with
   calibrated probabilities, lead-generation pipelines on <strong>Databricks</strong>, and the
   monitoring that keeps them honest. I'm most interested in the step from a score to a
   <strong>decision</strong>: cut-offs, trade-offs, and what each choice costs.`,
  `I'm doing a part-time <strong>MSc in Data Science</strong> and use this site to write up what
   I learn: credit risk modelling, probability, and building ML systems that people actually use.`,
];

// Dải ô thông tin ngắn ở trang chủ.
// ⚠️ Chỉ ghi điều có thật và được phép công khai.
export const STATS = [
  { value: 'Since 2024', label: 'Lending analytics & modelling at Techcombank' },
  { value: 'Calibrated ML', label: 'LightGBM propensity & connection models' },
  { value: '2 awards', label: "People's Choice · Star of June (D&A)" },
  { value: 'MSc DS', label: 'VNU University of Science (in progress)' },
];

// Link mạng xã hội. `icon` là tên icon trong components/Icon.astro. Xoá dòng nào không muốn hiện.
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/tienngm2049', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tienngm2049', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:tienngm2049@gmail.com', icon: 'mail' },
  { label: 'RSS', href: '/rss.xml', icon: 'rss' },
];

// Menu trên cùng ở các trang con
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

// "Model card" ở trang chủ: giới thiệu bản thân theo format model card trong ML.
// Mỗi dòng: nhãn bên trái, nội dung bên phải. Được dùng <strong>, <a>.
export const MODEL_CARD = [
  { k: 'Model', v: 'Nguyen Manh Tien · build 2026.10' },
  { k: 'Type', v: 'BI analyst, retraining as a data scientist' },
  { k: 'Domain', v: 'Retail lending: unsecured loans, credit cards, acquisition' },
  { k: 'Training data', v: 'Economics (FTU) → lending analytics at Techcombank → MSc Data Science' },
  { k: 'Languages', v: 'English (IELTS 8.0) · Chinese (HSK 5) · Vietnamese' },
  { k: 'Objective', v: 'Turn scores into decisions people can defend' },
  { k: 'Known limitations', v: 'Still working through measure-theoretic probability' },
];

// Khối "Now": đang làm gì. Cập nhật vài tháng một lần.
export const NOW = [
  'MSc coursework: probability & statistical learning',
  'Building an end-to-end PD scorecard case study',
  'Writing about calibration and cut-off decisions',
];
