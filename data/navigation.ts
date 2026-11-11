export type NavItem = {
  id: string;
  label: string;
};

export const navigation: NavItem[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О проекте" },
  { id: "gameplay", label: "Геймплей" },
  { id: "evolution", label: "Эволюция" },
  { id: "progression", label: "Прогрессия" },
  { id: "updates", label: "Новости" },
  { id: "leaderboard", label: "Лидеры" },
  { id: "shop", label: "Магазин" },
  { id: "team", label: "Команда" },
];

/** Полная карта секций для мобильного меню и футера. */
export const navigationFull: NavItem[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О проекте" },
  { id: "gameplay", label: "Геймплей" },
  { id: "tycoon", label: "Тайкун" },
  { id: "evolution", label: "Эволюция" },
  { id: "combat", label: "Бои" },
  { id: "progression", label: "Прогрессия" },
  { id: "features", label: "Особенности" },
  { id: "updates", label: "Новости" },
  { id: "leaderboard", label: "Лидеры" },
  { id: "shop", label: "Магазин" },
  { id: "team", label: "Команда" },
  { id: "community", label: "Сообщество" },
];
