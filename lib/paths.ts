/**
 * Путь с учётом basePath (GitHub Pages: /meimei-website).
 * next/image с unoptimized не добавляет basePath к строковым src —
 * поэтому все локальные ассеты оборачиваются в asset().
 */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
