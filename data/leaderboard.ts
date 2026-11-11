/**
 * Таблица лидеров. Пока не подключена реальная статистика — пустая.
 * Никаких вымышленных игроков и значений.
 */
export type LeaderRow = {
  rank: number;
  player: string;
  level: number;
  rebirth: number;
  progress: number; // условный общий прогресс, 0–100
  note?: string;
};

export const leaderboardRows: LeaderRow[] = [];
