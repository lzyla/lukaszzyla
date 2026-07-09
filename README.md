# Strona osobista — Astro + MDX

Minimalistyczna strona typu „pisanie / projekty / research" (styl Kaliski / Litt
/ Matuschak). Treść w Markdown/MDX, w tekst wpisu można wstawiać **interaktywne
komponenty** (suwaki, wykresy) — bez iframe, bez Notion.

## Uruchomienie lokalne

Potrzebujesz Node.js 18+ (najlepiej 20+).

```bash
cd strona-astro
npm install
npm run dev
```

Otwórz http://localhost:4321 — zmiany widać na żywo.

## Jak dodać nowy wpis

1. Utwórz plik w `src/content/writing/`, np. `moj-wpis.md` (albo `.mdx`, jeśli
   chcesz osadzać komponenty).
2. Na górze pliku dodaj „frontmatter":

   ```yaml
   ---
   title: "Tytuł wpisu"
   description: "Krótki opis (opcjonalnie)"
   date: 2026-07-09
   draft: false        # true = ukryty, nie publikuje się
   tags: ["ai", "prawo"]
   ---
   ```
3. Pisz treść pod spodem. Zapis pliku = gotowe.

## Jak wstawić interaktywny widget (kod z Claude)

W pliku **`.mdx`** zaimportuj komponent na górze i użyj go w dowolnym miejscu:

```mdx
import GrowthExplorer from '../../components/GrowthExplorer.astro';

Tu leci tekst wpisu.

<GrowthExplorer principal={1000} rate={7} years={20} />

I dalej tekst.
```

Nowy widget od Claude: wrzuć plik `.astro` do `src/components/`, zaimportuj,
wstaw. Wzór masz w `src/components/GrowthExplorer.astro` — to zwykły HTML + CSS
+ `<script>` (Astro sam uruchamia skrypt w przeglądarce).

## Konfiguracja przed publikacją

W `astro.config.mjs` zmień `site` na docelowy adres. W `src/layouts/Base.astro`
podmień imię/linki nawigacji, a w `src/pages/about.astro` — treść o sobie.

## Deploy za darmo

### Vercel (rekomendowane — najprostsze)
1. Wrzuć repo na GitHub.
2. Na vercel.com: „New Project" → wskaż repo → Deploy. Vercel wykryje Astro sam.
3. Każdy `git push` = automatyczny redeploy.

### GitHub Pages
1. Ustaw w `astro.config.mjs`: `site: 'https://user.github.io'` oraz
   `base: '/nazwa-repo'` (jeśli strona ma być w podkatalogu).
2. Dodaj workflow `.github/workflows/deploy.yml` z oficjalnej instrukcji Astro
   (docs.astro.build → Deploy → GitHub Pages) i włącz Pages w ustawieniach repo.

## Struktura

```
src/
  content/writing/   ← Twoje wpisy (.md / .mdx)
  components/        ← interaktywne komponenty (widgety)
  layouts/          ← szablon strony i wpisu
  pages/            ← strona główna, /about, routing wpisów
  styles/global.css ← cały wygląd (jeden plik)
```
