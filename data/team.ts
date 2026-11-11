/**
 * Реальный состав команды. Не добавлять выдуманных участников:
 * новые члены добавляются сюда только по решению основателя.
 */
export type TeamMember = {
  id: string;
  name: string; // ник основателя / разработчика
  role: string; // должность
  bio?: string; // короткое описание (опционально)
  initials: string;
  social?: { label: string; url: string };
  founder?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "linarskkee",
    role: "Founder / Project Lead",
    initials: "L",
    founder: true,
  },
  {
    id: "lead-dev",
    name: "Jengas",
    role: "Главный Разработчик / Слава Меймей / И просто какой-то тип",
    initials: "J",
  },
];
