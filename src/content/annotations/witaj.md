---
title: "Witaj — pierwsza adnotacja"
description: "Przykładowy wpis w Markdown, żeby pokazać, jak działa sekcja Annotations."
date: 2026-07-10
draft: false
tags: ["meta"]
---

To jest zwykły plik `.md` w folderze `src/content/annotations/`. Nazwa pliku
(`witaj.md`) staje się adresem wpisu: `/annotations/witaj/`.

Piszesz normalnym Markdownem. Nagłówki, listy, linki, cytaty — wszystko działa.

## Jak dodać kolejną adnotację

1. Utwórz nowy plik, np. `dostep-do-informacji.md` (slug z myślnikami, bez polskich znaków).
2. Skopiuj nagłówek (frontmatter) z góry tego pliku i zmień pola.
3. Napisz treść pod spodem. Zapis = gotowe.

Ustaw `draft: true`, żeby ukryć szkic. Gdy potrzebujesz suwaka albo wykresu,
zmień rozszerzenie na `.mdx` i użyj skilla `dodaj-widget`.

Możesz też po prostu powiedzieć Claude: *„napisz adnotację o…"* — skill
`nowy-wpis` utworzy plik za Ciebie.
