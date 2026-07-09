import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kolekcja "writing" = Twoje wpisy/eseje/notatki.
// Pliki .md i .mdx wrzucasz do src/content/writing/
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing };
