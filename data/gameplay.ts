export type GameplayCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // ключ иконки Lucide (см. sections/Gameplay.tsx)
  accent: "accent" | "neon";
  span?: "wide" | "tall";
};

export const gameplayCards: GameplayCard[] = [
  {
    id: "build",
    title: "BUILD YOUR EMPIRE",
    subtitle: "Строй свою территорию",
    description:
      "Начинаешь с одного участка — а заканчиваешь целым комплексом производств. Каждое здание меняет твою базу визуально и приносит ресурсы.",
    icon: "hammer",
    accent: "accent",
    span: "wide",
  },
  {
    id: "upgrade",
    title: "UPGRADE MEIMEI",
    subtitle: "Прокачка персонажа",
    description:
      "Улучшай силу, скорость, интеллект добычи. Каждое улучшение ощутимо меняет темп игры и открывает новые механики.",
    icon: "zap",
    accent: "neon",
  },
  {
    id: "income",
    title: "GENERATE INCOME",
    subtitle: "Производство и доход",
    description:
      "Постройки работают даже когда ты просто гуляешь по базе. Автоматизация — ключ к масштабу: чем умнее цепочка, тем больше прибыль.",
    icon: "coins",
    accent: "accent",
  },
  {
    id: "evolve",
    title: "EVOLVE",
    subtitle: "Эволюции",
    description:
      "Меймей — не статичный персонаж. Прохождение ключевых этапов развития открывает новые формы с собственным визуалом и способностями.",
    icon: "dna",
    accent: "neon",
    span: "tall",
  },
  {
    id: "fight",
    title: "FIGHT",
    subtitle: "Боевые столкновения",
    description:
      "Территория вокруг базы не пустует: NPC-противники и боссы защищают ценные зоны. Победы дают ресурсы, которых нельзя просто купить.",
    icon: "swords",
    accent: "accent",
  },
  {
    id: "explore",
    title: "EXPLORE",
    subtitle: "Новые территории",
    description:
      "Карта постепенно раскрывается по мере прогресса. Каждая зона — свой стиль, свои противники и собственная экономика.",
    icon: "map",
    accent: "neon",
  },
];
