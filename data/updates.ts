/**
 * Новости проекта. Заполняется реальными обновлениями по мере выхода патчей.
 * Пока раздел пуст — никаких вымышленных новостей.
 */
export type UpdatePost = {
  id: string;
  date: string;
  category: "Обновление" | "Концепт" | "Событие" | "Devblog";
  title: string;
  excerpt: string;
  cover: string;
};

export const updates: UpdatePost[] = [];
