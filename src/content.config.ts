import { defineCollection } from 'astro:content';

// Brak kolekcji treści — strona jest jedną statyczną wizytówką.
// (Dawna kolekcja "writing" została usunięta.)
export const collections: Record<string, ReturnType<typeof defineCollection>> = {};
