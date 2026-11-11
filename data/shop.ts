/**
 * Ассортимент магазина. Пока не утверждён — раздел пуст,
 * без фиктивных предметов и цен.
 */
export type ShopItem = {
  id: string;
  name: string;
  category: "Улучшения" | "Косметика" | "Формы" | "Способности" | "Бонусы";
  description: string;
  rarity: "Обычный" | "Редкий" | "Эпический" | "Особый";
  rarityTone: "steel" | "accent" | "violet" | "neon";
  price: string;
  icon: string;
  soon?: boolean;
};

export const shopCategories = [
  "Улучшения",
  "Косметика",
  "Формы",
  "Способности",
  "Бонусы",
] as const;

export const shopItems: ShopItem[] = [];
