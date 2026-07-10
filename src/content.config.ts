import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kolekcja "annotations" = Twoje adnotacje / notatki / eseje.
// Pliki .md i .mdx wrzucasz do src/content/annotations/
const annotations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/annotations' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { annotations };
