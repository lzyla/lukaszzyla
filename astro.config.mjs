import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Docelowy adres — używany do poprawnych linków i sitemap.
export default defineConfig({
  site: 'https://lukaszzyla.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
