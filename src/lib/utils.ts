import { getCollection } from 'astro:content';

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });

/** Số phút đọc ước tính (~220 từ/phút), bỏ qua khối code và công thức */
export function readingTime(body = '') {
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/\$\$[\s\S]*?\$\$/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// Bài nháp (draft: true) chỉ hiện khi chạy `npm run dev`, KHÔNG lên site thật.
const showDrafts = import.meta.env.DEV;

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const order = { featured: 0, active: 1, archive: 2 } as const;
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return projects.sort(
    (a, b) => order[a.data.status] - order[b.data.status] || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
