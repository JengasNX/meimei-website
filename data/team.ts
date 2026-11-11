/**
 * Реальный состав команды. Не добавлять выдуманных участников:
 * новые члены добавляются сюда только по решению основателя.
 *
 * Аватарки кладутся в public/images/team/<ник>.webp — пока файла нет,
 * карточка показывает инициалы.
 */
export type TeamMember = {
  id: string;
  name: string; // ник основателя / разработчика
  role: string; // должность
  bio: string; // описание
  initials: string;
  avatar?: string; // /images/team/...
  social?: { label: string; url: string };
  founder?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "linarskkee",
    role: "Founder / Project Lead",
    bio: "Основатель проекта «Слово Меймея. Шерсть на крови». Придумал игру, задаёт её видение, утверждает механики и управляет приоритетами разработки.",
    initials: "L",
    avatar: "/images/team/linarskkee.webp",
    founder: true,
  },
  {
    id: "lead-dev",
    name: "Jengas",
    role: "Главный Разработчик / Слава Меймей / И просто какой-то тип",
    bio: "Главный разработчик игры. Собирает геймплей в Roblox: тайкун, эволюции, бои и экономика — всё, что делает Меймей великим. Слава Меймей.",
    initials: "J",
    // ⚠️ Положите фото в public/images/team/jengas.webp — аватар появится автоматически
    avatar: "/images/team/jengas.webp",
  },
];
