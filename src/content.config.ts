// Định nghĩa "khuôn" (schema) cho bài viết và project.
// Nếu frontmatter của file .md sai khuôn, Astro báo lỗi ngay khi chạy -> đỡ lỗi lặt vặt.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'vi']).default('en'),
    // true -> hiện trong mục "Start here" ở trang Writing
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // featured: hiện ở trang chủ | active: đang làm | archive: project cũ
    status: z.enum(['featured', 'active', 'archive']).default('active'),
    // Tóm tắt kiểu case study, hiện thành bảng ở đầu trang project
    problem: z.string().optional(),
    approach: z.string().optional(),
    outcome: z.string().optional(),
    stack: z.array(z.string()).default([]),
    // Ô "validation metrics" ở đầu trang project, vd: [{ label: 'Gini', value: '0.62' }]
    // ⚠️ Chỉ ghi số từ dữ liệu PUBLIC, không bao giờ ghi số của công ty.
    metrics: z.array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() })).default([]),
    cover: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
