import Image from "next/image";
import { ChevronDown, Coins, Dna, Play, Sparkles, Zap } from "lucide-react";
import { HeroIntro, Reveal } from "@/components/motion";
import { ParticleField } from "@/components/ParticleField";
import { SloganRotator } from "@/components/SloganRotator";
import { heroStats } from "@/data/features";
import { links } from "@/config/site";

const playHref = links.roblox || "#community";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-[72px]">
      {/* ── Фоновые слои ── */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_35%,rgba(84,168,255,0.14),transparent),radial-gradient(ellipse_40%_40%_at_15%_80%,rgba(57,255,114,0.06),transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent"
        aria-hidden="true"
      />
      <ParticleField count={52} />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pt-0 lg:pb-0">
        {/* ── Текстовый блок ── */}
        <div className="max-w-2xl">
          <HeroIntro delay={0.05}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-[11px] font-bold tracking-[0.26em] text-accent-soft uppercase">
                Roblox · Tycoon × Simulator × Evolution
              </span>
            </div>
          </HeroIntro>

          <HeroIntro delay={0.15}>
            <h1 className="mt-6 font-display text-[13vw] font-black leading-[0.98] tracking-tight text-frost sm:text-6xl lg:text-[4.6rem]">
              СЛОВО
              <br />
              <span className="text-gradient">МЕЙМЕЯ</span>
            </h1>
          </HeroIntro>

          <HeroIntro delay={0.25}>
            <p className="mt-4 font-display text-sm font-bold tracking-[0.42em] text-neon uppercase sm:text-base">
              Шерсть на крови
            </p>
            <div className="mt-5">
              <SloganRotator />
            </div>
          </HeroIntro>

          <HeroIntro delay={0.35}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={playHref}
                {...(links.roblox ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-accent px-8 font-display text-sm font-bold tracking-[0.14em] text-night transition-all duration-300 hover:glow-accent hover:brightness-110"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Play className="h-4 w-4 fill-current" />
                PLAY NOW
              </a>
              <a
                href="#about"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.03] px-8 font-display text-sm font-bold tracking-[0.14em] text-frost backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft"
              >
                DISCOVER
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </HeroIntro>

          <HeroIntro delay={0.45}>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/8 pt-6">
              {heroStats.map((s) => (
                <div key={s.id}>
                  <dt className="text-[10px] font-semibold tracking-[0.24em] text-mist uppercase">{s.label}</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-frost">{s.value}</dd>
                </div>
              ))}
            </dl>
          </HeroIntro>
        </div>

        {/* ── Персонаж ── */}
        <HeroIntro delay={0.3} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="relative">
            {/* Свечение позади персонажа */}
            <div
              className="absolute inset-8 animate-pulse-glow rounded-full bg-[radial-gradient(circle,rgba(84,168,255,0.22),transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            {/* Декоративное кольцо */}
            <div
              className="absolute -inset-2 animate-spin-slow rounded-full border border-dashed border-accent/15 sm:-inset-6"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/40 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/meimei/meimei-main.webp"
                alt="Меймей — главный герой игры: серо-белая шерсть, чёрные полосы и огромные глаза"
                width={1180}
                height={1248}
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="h-auto w-full object-cover"
              />
              {/* Стеклянная подложка снизу */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night/90 to-transparent" aria-hidden="true" />
            </div>

            {/* Плавающие игровые карточки */}
            <div className="absolute -left-3 top-10 hidden animate-float sm:block lg:-left-10">
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon/15">
                  <Coins className="h-4 w-4 text-neon" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-mist uppercase">Доход</p>
                  <p className="font-display text-sm font-bold text-frost">24/7</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-1/3 hidden animate-float-slow sm:block lg:-right-8">
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15">
                  <Zap className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-mist uppercase">Уровень</p>
                  <p className="font-display text-sm font-bold text-frost">Прокачка</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-10 hidden animate-float sm:block" style={{ animationDelay: "1.2s" }}>
              <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon/15">
                  <Dna className="h-4 w-4 text-neon" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-mist uppercase">Эволюция</p>
                  <p className="font-display text-sm font-bold text-frost">Формы</p>
                </div>
              </div>
            </div>
          </div>
        </HeroIntro>
      </div>

      {/* Скролл-подсказка */}
      <Reveal delay={0.9} y={0}>
        <a
          href="#about"
          aria-label="Прокрутить к разделу «О проекте»"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-mist transition-colors hover:text-accent lg:flex"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Листай</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
