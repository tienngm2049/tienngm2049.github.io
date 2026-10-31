// Cấu hình chính của Astro. Xem giải thích chi tiết ở docs/02-cau-truc-du-an.md
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://tienngm2049.github.io',
  integrations: [sitemap()],
  markdown: {
    // Cho phép viết công thức toán kiểu LaTeX: $...$ và $$...$$
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
