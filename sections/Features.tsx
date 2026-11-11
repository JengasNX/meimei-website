import Image from "next/image";
import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { features } from "@/data/features";
import { asset } from "@/lib/paths";

export function Features() {
  return (
    <SectionShell id="features">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Прилипающая колонка с изображением */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Features · Особенности"
            title={
              <>
                Почему это <span className="text-gradient">не очередной тайкун</span>
              </>
            }
          />
          <Reveal delay={0.12} className="relative mt-8 hidden lg:block">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_70%_60%,rgba(57,255,114,0.12),transparent_65%)] blur-xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image
                src={asset("/images/meimei/meimei-evolution-green.webp")}
                alt="Меймей в особой неоновой форме — концепт эволюции"
                width={1180}
                height={1124}
                sizes="38vw"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <span className="glass rounded-lg px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-neon uppercase">
                  Неоновая форма · концепт
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Чередующиеся строки */}
        <ul className="flex flex-col">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={0.05 * i}>
              <li
                className={`group flex gap-6 border-b border-white/8 py-8 transition-colors duration-300 hover:border-accent/30 ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/8 bg-surface/60 transition-all duration-300 group-hover:border-accent/40 group-hover:glow-accent">
                  <GameIcon name={f.icon} className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-frost">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist sm:text-[15px]">{f.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
          <li className="hidden border-b border-transparent pb-2" aria-hidden="true" />
        </ul>
      </div>
    </SectionShell>
  );
}
