export type Milestone = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
};

/** Механики прогрессии из концепции игры — без выдуманных значений. */
export const progressionPath: Milestone[] = [
  {
    id: "levels",
    step: "01",
    title: "Уровни персонажа",
    description: "Опыт капает с каждой минуты игры: добычи, боёв и производства. Уровни повышают характеристики Меймей.",
    icon: "trending-up",
  },
  {
    id: "evolution",
    step: "02",
    title: "Порог эволюции",
    description: "На ключевых уровнях Меймей готов к переходу в новую форму.",
    icon: "dna",
  },
  {
    id: "territories",
    step: "03",
    title: "Новые территории",
    description: "Карта раскрывается поэтапно: каждая зона — новая экономика и новые противники.",
    icon: "map",
  },
  {
    id: "rebirth",
    step: "04",
    title: "Rebirth",
    description: "Добровольный сброс прогресса с постоянным множителем — рискнуть ради скорости второго захода.",
    icon: "refresh-cw",
  },
  {
    id: "rare",
    step: "05",
    title: "Редкие предметы",
    description: "Коллекционные предметы за боссов и долгие серии входов.",
    icon: "gem",
  },
  {
    id: "legacy",
    step: "06",
    title: "Долгосрочные цели",
    description: "Глобальные вехи аккаунта: полный каталог форм, максимальная империя, топ таблицы лидеров.",
    icon: "flag",
  },
];

export type TerritoryZone = {
  id: string;
  name: string;
  status: string;
  tone: "steel" | "accent" | "locked";
};

/** Зоны карты без выдуманных названий — детализируются по мере разработки. */
export const territoryZones: TerritoryZone[] = [
  { id: "z1", name: "Стартовая зона", status: "Доступна с начала игры", tone: "steel" },
  { id: "z2", name: "Зона II", status: "Открывается по прогрессу", tone: "accent" },
  { id: "z3", name: "Зона III", status: "Открывается по прогрессу", tone: "accent" },
  { id: "z4", name: "Засекреченная зона", status: "???", tone: "locked" },
];
