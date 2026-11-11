import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { leaderboardRows } from "@/data/leaderboard";

const topTones = [
  { ring: "border-amber-300/40", chip: "bg-amber-300/15 text-amber-300", glow: "hover:shadow-[0_0_50px_rgba(252,211,77,0.12)]" },
  { ring: "border-slate-300/30", chip: "bg-slate-300/10 text-slate-300", glow: "hover:shadow-[0_0_40px_rgba(203,213,225,0.1)]" },
  { ring: "border-orange-400/30", chip: "bg-orange-400/10 text-orange-300", glow: "hover:shadow-[0_0_40px_rgba(251,146,60,0.1)]" },
];

const columns = "grid-cols-[48px_1fr_auto] sm:grid-cols-[64px_1fr_110px_110px_1fr]";

export function Leaderboard() {
  return (
    <SectionShell id="leaderboard" className="bg-abyss/40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="relative">
        <SectionHeading
          eyebrow="Leaderboard · Таблица лидеров"
          title={
            <>
              Кому подчиняется <span className="text-gradient">карта шерсти</span>
            </>
          }
          description="Место для рейтинга игроков. Реальная статистика пока не подключена — таблица заполнится после запуска игры."
          align="center"
        />

        {leaderboardRows.length === 0 ? (
          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-white/12 bg-surface/40 px-8 py-16 text-center">
              <p className="font-display text-lg font-bold text-frost">Таблица пока пуста</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Здесь появятся лучшие тайкуны проекта: место, уровень, Rebirth и общий прогресс.
                Первые три позиции получат специальное выделение.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.15}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/8 bg-surface/50 backdrop-blur">
              <div className={`hidden gap-4 border-b border-white/8 px-6 py-4 text-[11px] font-bold tracking-[0.2em] text-mist uppercase sm:grid ${columns}`}>
                <span>Место</span>
                <span>Игрок</span>
                <span>Уровень</span>
                <span>Rebirth</span>
                <span>Общий прогресс</span>
              </div>
              <ul>
                {leaderboardRows.map((row) => {
                  const top = row.rank <= 3 ? topTones[row.rank - 1] : null;
                  return (
                    <li
                      key={row.player}
                      className={`grid items-center gap-3 border-b border-white/5 px-4 py-4 transition-all duration-300 last:border-b-0 sm:gap-4 sm:px-6 ${columns} ${
                        top ? `${top.ring} border-l-2 bg-white/[0.03] ${top.glow}` : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-bold ${
                          top ? top.chip : "bg-abyss text-mist"
                        }`}
                      >
                        <span className="font-mono">{row.rank}</span>
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-sm font-bold text-frost">{row.player}</span>
                        {row.note && <span className="block truncate text-xs text-mist">{row.note}</span>}
                      </span>
                      <span className="hidden font-mono text-sm text-accent-soft sm:block">{row.level}</span>
                      <span className="hidden font-mono text-sm text-mist sm:block">R{row.rebirth}</span>
                      <span className="col-span-3 sm:col-span-1">
                        <span className="flex items-center gap-3">
                          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                            <span
                              className={`block h-full rounded-full ${top ? "bg-gradient-to-r from-amber-300 to-orange-400" : "bg-gradient-to-r from-accent to-leaf"}`}
                              style={{ width: `${row.progress}%` }}
                            />
                          </span>
                          <span className="w-10 text-right font-mono text-xs text-mist">{row.progress}%</span>
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </SectionShell>
  );
}
