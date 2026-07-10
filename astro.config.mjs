import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Docelowy adres — używany do poprawnych linków i sitemap.
export default defineConfig({
  site: 'https://lukaszzyla.com',
  // Ukrywa pasek narzędzi deweloperskich Astro (ciemna „pigułka" na dole ekranu
  // podczas `npm run dev`). Nie wpływa na wersję produkcyjną.
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
