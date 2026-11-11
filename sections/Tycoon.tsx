import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { tycoonPipelines, tycoonStages } from "@/data/tycoon";

const stageTone: Record<string, string> = {
  tent: "text-mist",
  factory: "text-accent",
  warehouse: "text-accent-soft",
  "building-2": "text-leaf",
  gem: "text-neon",
};

export function Tycoon() {
  return (
    <SectionShell id="tycoon">
      <SectionHeading
        eyebrow="Tycoon · Развитие базы"
        title={
          <>
            От пустого участка <span className="text-gradient">до индустриальной империи</span>
          </>
        }
        description="База — главный персонаж вашего прогресса. Покупайте постройки, выстраивайте производственные цепочки и наблюдайте, как территория меняется на глазах."
      />

      {/* Визуальная лестница этапов */}
      <div className="mt-16">
        <Reveal>
          <h3 className="mb-6 font-display text-sm font-bold tracking-[0.2em] text-frost uppercase">
            Лестница развития базы
          </h3>
        </Reveal>

        <ol className="relative grid gap-4 lg:grid-cols-5">
          {/* Соединительная линия */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-mist/30 via-accent/40 to-neon/50 lg:block"
            aria-hidden="true"
          />
          {tycoonStages.map((stage, i) => (
            <Reveal key={stage.id} delay={0.07 * i}>
              <li className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-surface/55 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35">
                <div className="flex items-center justify-between">
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-abyss transition-colors group-hover:border-accent/40">
                    <GameIcon name={stage.icon} className={`h-5 w-5 ${stageTone[stage.icon] ?? "text-accent"}`} />
                  </span>
                  <span className="rounded-md bg-abyss px-2 py-1 font-display text-[10px] font-bold tracking-[0.18em] text-mist uppercase">
                    {stage.level}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-[15px] font-bold text-frost">{stage.title}</h4>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-mist">{stage.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Пайплайн развития */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tycoonPipelines.map((p, i) => (
          <Reveal key={p.id} delay={0.06 * i}>
            <div className="group relative h-full rounded-2xl border border-white/8 bg-gradient-to-b from-surface/70 to-transparent p-6 transition-colors duration-300 hover:border-accent/30">
              <span className="font-display text-3xl font-black text-white/8 transition-colors duration-300 group-hover:text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-3 font-display text-sm font-bold text-frost">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
