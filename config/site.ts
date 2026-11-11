/**
 * ЕДИНЫЙ КОНФИГ ВНЕШНИХ ССЫЛОК И МЕТАДАННЫХ ПРОЕКТА.
 *
 * ⚠️ Все реальные адреса (Roblox, Discord, соцсети) ДОЛЖНЫ добавляться
 * только сюда. Пока ссылки не подтверждены — стоят пустые заглушки "".
 * Компоненты сами подставляют безопасное поведение, если ссылка пустая.
 */

export const site = {
  name: "Слово Меймея",
  tagline: "Шерсть на крови",
  description:
    "Официальный сайт Roblox-игры «Слово Меймея. Шерсть на крови» — тайкун, симулятор и эволюция в одном проекте. Развивай базу, прокачивай Меймей, зарабатывай и открывай новые территории.",
  /**
   * Публичный адрес сайта. По умолчанию — GitHub Pages.
   * Можно переопределить через NEXT_PUBLIC_SITE_URL (например, при переходе
   * на собственный домен).
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jengasnx.github.io/meimei-website",
} as const;

export const links = {
  /** ⚠️ TODO: вставить ссылку на страницу игры в Roblox */
  roblox: "",
  /** ⚠️ TODO: вставить ссылку на Discord-сервер */
  discord: "",
  /** ⚠️ TODO: вставить ссылку на Telegram-канал (если появится) */
  telegram: "",
  /** ⚠️ TODO: вставить ссылку на YouTube-канал (если появится) */
  youtube: "",
  /** ⚠️ TODO: вставить ссылку на TikTok (если появится) */
  tiktok: "",
} as const;

export type LinkKey = keyof typeof links;

export const images = {
  main: "/images/meimei/meimei-main.webp",
  duo: "/images/meimei/meimei-duo.webp",
  evolutionGreen: "/images/meimei/meimei-evolution-green.webp",
} as const;
