import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { gameplayCards } from "@/data/gameplay";

const accentText = { accent: "text-accent", neon: "text-neon" } as const;
const accentBg = { accent: "bg-accent/12", neon: "bg-neon/12" } as const;
const accentBorder = { accent: "group-hover:border-accent/40", neon: "group-hover:border-neon/40" } as const;
const accentGlow = { accent: "group-hover:bg-accent/10", neon: "group-hover:bg-neon/10" } as const;

export function Gameplay() {
  return (
    <SectionShell id="gameplay" className="bg-abyss/40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="relative">
        <SectionHeading
          eyebrow="Gameplay · Игровой процесс"
          title={
            <>
              Шесть систем — <span className="text-gradient">одна шерстяная империя</span>
            </>
          }
          description="Каждая механика усиливает остальные: стройте, прокачивайте, зарабатывайте, эволюционируйте, сражайтесь и открывайте новое."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)]">
          {gameplayCards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={0.06 * i}
              className={card.span === "wide" ? "lg:col-span-2" : card.span === "tall" ? "lg:row-span-2" : ""}
            >
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${accentBorder[card.accent]}`}
              >
                {/* Свечение при hover */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ${accentGlow[card.accent]} group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${accentBg[card.accent]}`}>
                    <GameIcon name={card.icon} className={`h-5 w-5 ${accentText[card.accent]}`} />
                  </span>
                  <span className="font-display text-[10px] font-bold tracking-[0.3em] text-mist/60 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-base font-extrabold tracking-wide text-frost">
                  {card.title}
                </h3>
                <p className={`relative mt-1 text-xs font-semibold tracking-wide uppercase ${accentText[card.accent]}`}>
                  {card.subtitle}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-mist">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
