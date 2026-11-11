import Image from "next/image";
import { Lock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { DemoBadge, SectionHeading, SectionShell } from "@/components/SectionShell";
import { evolutionForms } from "@/data/evolutions";
import { asset } from "@/lib/paths";

const rarityStyles = {
  steel: "border-mist/30 bg-mist/10 text-mist",
  accent: "border-accent/40 bg-accent/10 text-accent-soft",
  neon: "border-neon/40 bg-neon/10 text-neon",
  locked: "border-white/10 bg-white/5 text-mist/70",
} as const;

const frameStyles = {
  steel: "hover:border-white/20",
  accent: "hover:border-accent/40 hover:shadow-[0_0_50px_rgba(84,168,255,0.15)]",
  neon: "hover:border-neon/50 hover:shadow-[0_0_60px_rgba(57,255,114,0.18)]",
  locked: "hover:border-white/15",
} as const;

export function Evolution() {
  return (
    <SectionShell id="evolution" className="bg-abyss/40">
      {/* Атмосферное свечение */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_80%_20%,rgba(57,255,114,0.07),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Evolution · Эволюция"
            title={
              <>
                Формы Меймей: <span className="text-gradient-neon">путь эволюции</span>
              </>
            }
            description="Визуальная концепция развития персонажа. Названия и характеристики неутверждённых форм — демонстрационные концепты, финальные данные появятся позже."
          />
          <Reveal delay={0.15}>
            <DemoBadge>часть форм — концепты</DemoBadge>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {evolutionForms.map((form, i) => (
            <Reveal key={form.id} delay={0.08 * i} className="h-full">
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/60 transition-all duration-300 hover:-translate-y-1.5 ${frameStyles[form.rarityTone]}`}
              >
                {/* Визуальная часть */}
                <div className={`relative aspect-[4/3.4] overflow-hidden ${form.status === "locked" ? "bg-abyss" : "bg-surface/30"}`}>
                  {form.image ? (
                    <>
                      <Image
                        src={asset(form.image)}
                        alt={form.imageAlt ?? form.name}
                        width={form.id === "base" ? 1180 : form.id === "duo" ? 1179 : 1180}
                        height={form.id === "base" ? 1248 : form.id === "duo" ? 819 : 1124}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          form.id === "green" ? "mix-blend-screen" : ""
                        }`}
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface/90 to-transparent"
                        aria-hidden="true"
                      />
                      {form.status === "concept" && (
                        <span className="absolute left-3 top-3">
                          <DemoBadge>Концепт</DemoBadge>
                        </span>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-mist/50">
                      <Lock className="h-8 w-8" />
                      <span className="font-display text-xs font-bold tracking-[0.3em] uppercase">Скоро</span>
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-md bg-night/70 px-2 py-1 font-display text-[10px] font-bold tracking-[0.18em] text-mist uppercase backdrop-blur">
                    {form.formLabel}
                  </span>
                </div>

                {/* Текстовая часть */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[15px] font-bold text-frost">{form.name}</h3>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${rarityStyles[form.rarityTone]}`}
                    >
                      {form.rarity}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-mist">{form.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {form.traits.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-white/8 bg-abyss px-2 py-1 text-[11px] font-medium text-mist"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Демонстрация развития */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/8 bg-surface/40 p-8 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_80%_at_0%_50%,rgba(84,168,255,0.08),transparent),radial-gradient(ellipse_40%_80%_at_100%_50%,rgba(57,255,114,0.1),transparent)]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-0 sm:text-left">
              <div className="sm:pr-10 sm:text-right">
                <p className="font-display text-[11px] font-bold tracking-[0.28em] text-mist uppercase">Начало</p>
                <p className="mt-1 font-display text-xl font-extrabold text-frost">Один котёнок</p>
                <p className="mt-1 text-sm text-mist">и пустой участок земли</p>
              </div>
              <div className="relative flex h-12 w-40 items-center justify-center sm:w-52">
                <div className="h-px w-full bg-gradient-to-r from-accent/30 via-leaf/60 to-neon" aria-hidden="true" />
                <span className="absolute rounded-full border border-neon/40 bg-night px-3 py-1 font-display text-[10px] font-bold tracking-[0.2em] text-neon uppercase">
                  Эволюция
                </span>
              </div>
              <div className="sm:pl-10">
                <p className="font-display text-[11px] font-bold tracking-[0.28em] text-mist uppercase">Цель</p>
                <p className="mt-1 font-display text-xl font-extrabold text-gradient-neon">Империя форм</p>
                <p className="mt-1 text-sm text-mist">и территория, которая работает на вас</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
