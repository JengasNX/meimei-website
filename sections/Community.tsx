import { MessageSquare, Play, Radio } from "lucide-react";
import { Reveal } from "@/components/motion";
import { ParticleField } from "@/components/ParticleField";
import { links } from "@/config/site";

type Cta = {
  id: string;
  icon: typeof Play;
  title: string;
  text: string;
  label: string;
  href: string;
  primary?: boolean;
};

const ctas: Cta[] = [
  {
    id: "play",
    icon: Play,
    title: "Играть в Roblox",
    text: "Заходите на базу и начинайте первую империю.",
    label: "Играть",
    href: links.roblox,
    primary: true,
  },
  {
    id: "discord",
    icon: MessageSquare,
    title: "Discord-сервер",
    text: "Концепты, голосования и общение с командой.",
    label: "Присоединиться",
    href: links.discord,
  },
  {
    id: "news",
    icon: Radio,
    title: "Новости проекта",
    text: "Патчи, события и devblog — в разделе новостей.",
    label: "Новости",
    href: "#updates",
  },
];

function CtaButton({ cta }: { cta: Cta }) {
  const external = cta.href.startsWith("http");
  const disabled = !cta.href || cta.href === "";

  const className = cta.primary
    ? "group relative inline-flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-accent px-8 font-display text-sm font-bold tracking-[0.12em] text-night transition-all duration-300 hover:glow-accent hover:brightness-110"
    : "inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.03] px-8 font-display text-sm font-bold tracking-[0.12em] text-frost backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft";

  const content = (
    <>
      <cta.icon className="h-4 w-4 shrink-0" />
      <span className="whitespace-nowrap">{cta.label}</span>
    </>
  );

  if (disabled) {
    return (
      <span className={`${className} cursor-not-allowed opacity-60`} title="Ссылка будет добавлена после запуска">
        {content}
      </span>
    );
  }

  return (
    <a
      href={cta.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {content}
    </a>
  );
}

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden border-t border-white/5">
      {/* Фон */}
      <div className="absolute inset-0 bg-abyss/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_110%,rgba(84,168,255,0.16),transparent),radial-gradient(ellipse_35%_40%_at_80%_100%,rgba(57,255,114,0.08),transparent)]"
        aria-hidden="true"
      />
      <ParticleField count={40} tone="neon" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <Reveal>
          <p className="font-display text-[11px] font-bold tracking-[0.36em] text-neon uppercase">
            Community · Сообщество
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-black leading-tight text-frost sm:text-5xl lg:text-6xl">
            Шерсть на крови.
            <br />
            <span className="text-gradient">Мем на века.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Империи строятся в одиночку — но играется всё это куда веселее вместе.
            Присоединяйтесь: играйте, обсуждайте и следите за развитием проекта.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
            {ctas.map((cta) => (
              <div
                key={cta.id}
                className="glass flex flex-col items-start rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12">
                  <cta.icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold text-frost">{cta.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mist">{cta.text}</p>
                <div className="mt-5 w-full">
                  <CtaButton cta={cta} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 text-xs text-mist/70">
            Ссылки на Roblox и Discord появятся здесь сразу после официального запуска.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
