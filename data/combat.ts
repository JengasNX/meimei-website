/**
 * Боевая система: только общие направления из концепции игры,
 * без выдуманных названий способностей и противников.
 */
export type CombatPillar = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const combatPillars: CombatPillar[] = [
  {
    id: "npc",
    title: "NPC-противники",
    description: "Враги разных уровней охраняют ценные зоны вокруг базы и мешают доходу.",
    icon: "swords",
  },
  {
    id: "bosses",
    title: "Боссы",
    description: "Крупные противники с серьёзной наградой — вызов для прокачанного Меймей.",
    icon: "crown",
  },
  {
    id: "abilities",
    title: "Способности Меймей",
    description: "Активные и пассивные умения, которые открываются по мере развития персонажа.",
    icon: "zap",
  },
  {
    id: "progression",
    title: "Боевая прогрессия",
    description: "Опыт, уровни бойца и новые слоты способностей — сила растёт вместе с империей.",
    icon: "trending-up",
  },
];

export const combatRewards = [
  { id: "res", label: "Ценные ресурсы", text: "Материалы, которые нельзя просто купить." },
  { id: "xp", label: "Боевой опыт", text: "Ускоряет развитие персонажа." },
  { id: "rep", label: "Контроль территории", text: "Победы закрепляют за вами зоны." },
];
