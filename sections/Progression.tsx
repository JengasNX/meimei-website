import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { progressionPath, territoryZones } from "@/data/progression";

const zoneTone = {
  steel: "border-mist/25 text-mist",
  accent: "border-accent/35 text-accent-soft",
  neon: "border-neon/35 text-neon",
  locked: "border-white/10 text-mist/60",
} as const;

export function Progression() {
  return (
    <SectionShell id="progression" className="bg-abyss/40">
      <SectionHeading
        eyebrow="Progression · Прогрессия"
        title={
          <>
            Прогресс, который <span className="text-gradient">не заканчивается</span>
          </>
        }
        description="Уровни, эволюции, территории и Rebirth складываются в один долгий путь — от первого рубля до полного контроля карты."
      />

      {/* Путь прогрессии */}
      <div className="relative mt-16">
        <div
          className="pointer-events-none absolute bottom-8 left-[23px] top-8 hidden w-px bg-gradient-to-b from-accent/40 via-leaf/40 to-neon/40 md:block"
          aria-hidden="true"
        />
        <ol className="grid gap-4 md:grid-cols-2 md:gap-x-16">
          {progressionPath.map((m, i) => (
            <Reveal key={m.id} delay={0.05 * i}>
              <li className="group relative flex gap-5 rounded-2xl border border-white/8 bg-surface/55 p-5 transition-all duration-300 hover:border-accent/30 md:ml-12">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-abyss transition-all duration-300 group-hover:border-accent/40 group-hover:glow-accent">
                  <GameIcon name={m.icon} className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-mist/60">{m.step}</span>
                    <h3 className="font-display text-[15px] font-bold text-frost">{m.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{m.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Территории */}
      <div className="mt-14">
        <Reveal>
          <h3 className="font-display text-sm font-bold tracking-[0.2em] text-frost uppercase">
            Карта раскрывается поэтапно
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {territoryZones.map((zone, i) => (
            <Reveal key={zone.id} delay={0.06 * i}>
              <div
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-1 ${zoneTone[zone.tone as keyof typeof zoneTone]}`}
              >
                <p className="font-mono text-xs text-mist/50">ZONE_{zone.id.toUpperCase()}</p>
                <div>
                  <h4 className="mt-4 font-display text-base font-bold text-frost">{zone.name}</h4>
                  <p className="mt-2 text-[13px] font-medium">{zone.status}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Rebirth — акцентный блок */}
      <Reveal delay={0.15}>
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-neon/20 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(57,255,114,0.08),transparent)] p-8 sm:p-12">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-[11px] font-bold tracking-[0.3em] text-neon uppercase">Rebirth-цикл</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-frost sm:text-3xl">
                Сброс — это не откат. Это ускорение.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-mist">
                Перейдя на новый виток, вы теряете часть прогресса, но получаете постоянный
                множитель дохода. Опытные игроки проходят стартовую базу за минуты — и каждый
                Rebirth делает следующую империю масштабнее предыдущей.
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-sm">
              {["R1", "R2", "R3", "R∞"].map((r, i) => (
                <span
                  key={r}
                  className={`grid h-14 w-14 place-items-center rounded-xl border font-bold transition-transform duration-300 hover:scale-110 ${
                    i === 3
                      ? "border-neon/50 bg-neon/10 text-neon glow-neon"
                      : "border-white/10 bg-surface/70 text-frost"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
