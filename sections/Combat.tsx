import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { combatPillars, combatRewards } from "@/data/combat";

export function Combat() {
  return (
    <SectionShell id="combat">
      <div className="relative">
        <SectionHeading
          eyebrow="Combat · Боевая система"
          title={
            <>
              Территория не сдаётся <span className="text-gradient">просто так</span>
            </>
          }
          description="Самое ценное защищают. Боевая система объединяет противников, способности Меймей и награды, которые нельзя купить."
        />

        {/* Направления боевой системы */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {combatPillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={0.06 * i} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-surface/70 to-abyss/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/12 transition-transform duration-300 group-hover:scale-110">
                  <GameIcon name={pillar.icon} className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-5 font-display text-[15px] font-bold text-frost">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Награды */}
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-leaf/20 bg-leaf/5 p-6 sm:p-8">
            <h3 className="font-display text-xs font-bold tracking-[0.24em] text-leaf uppercase">
              Награды за победы
            </h3>
            <ul className="mt-5 grid gap-5 sm:grid-cols-3">
              {combatRewards.map((r) => (
                <li key={r.id} className="rounded-xl bg-abyss/50 p-4">
                  <p className="font-display text-sm font-bold text-frost">{r.label}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mist">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
