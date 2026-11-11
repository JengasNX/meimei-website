/**
 * Формы эволюции. Подтверждена только базовая форма.
 * Остальные карточки — визуальные концепты на реальных изображениях,
 * без выдуманных характеристик.
 */
export type EvolutionForm = {
  id: string;
  formLabel: string;
  name: string;
  rarity: "Базовая" | "Особая" | "???";
  rarityTone: "steel" | "neon" | "locked";
  description: string;
  traits: string[];
  image?: string;
  imageAlt?: string;
  status: "confirmed" | "concept" | "locked";
};

export const evolutionForms: EvolutionForm[] = [
  {
    id: "base",
    formLabel: "Форма 01",
    name: "Классический Меймей",
    rarity: "Базовая",
    rarityTone: "steel",
    description:
      "Тот, с кого всё начинается: серо-белая шерсть, чёрные полосы и огромные чёрные глаза.",
    traits: ["Серо-белая шерсть", "Чёрные полосы", "Характерные уши"],
    image: "/images/meimei/meimei-main.webp",
    imageAlt: "Меймей в базовой форме — серо-белая шерсть с чёрными полосами",
    status: "confirmed",
  },
  {
    id: "duo",
    formLabel: "Форма 02",
    name: "Дуо-режим",
    rarity: "???",
    rarityTone: "locked",
    description: "Визуальный концепт. Механика и характеристики будут раскрыты позже.",
    traits: ["Концепт", "Детали скрыты"],
    image: "/images/meimei/meimei-duo.webp",
    imageAlt: "Два Меймей, стоящих рядом в зеркальной позе",
    status: "concept",
  },
  {
    id: "green",
    formLabel: "Особая форма",
    name: "Неоновая эволюция",
    rarity: "Особая",
    rarityTone: "neon",
    description:
      "Концепт особой эволюционной формы с зелёным свечением. Характеристики будут объявлены позже.",
    traits: ["Концепт", "Зелёное свечение"],
    image: "/images/meimei/meimei-evolution-green.webp",
    imageAlt: "Меймей в особой эволюционной форме с зелёным свечением",
    status: "concept",
  },
  {
    id: "locked",
    formLabel: "Форма 04",
    name: "Засекречено",
    rarity: "???",
    rarityTone: "locked",
    description: "Появится здесь, как только команда утвердит концепт.",
    traits: ["Данные скрыты"],
    status: "locked",
  },
];
