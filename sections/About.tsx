import Image from "next/image";
import { Building2, Dna, Infinity as InfinityIcon, Swords } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { asset } from "@/lib/paths";

const pillars = [
  {
    icon: Building2,
    title: "Не просто тайкун",
    text: "Здания — это только фундамент. Вокруг них живут персонаж, бои и исследование карты.",
  },
  {
    icon: Dna,
    title: "Персонаж-звезда",
    text: "Меймей растёт вместе с империей: прокачка, новые формы, способности и стиль.",
  },
  {
    icon: Swords,
    title: "Риск и добыча",
    text: "Самые ценные ресурсы не продаются — они отбираются у тех, кто охраняет территорию.",
  },
  {
    icon: InfinityIcon,
    title: "Причина вернуться",
    text: "Rebirth-циклы, территории и редкие предметы делают прогресс долгим и осмысленным.",
  },
];

export function About() {
  return (
    <SectionShell id="about">
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Изображение */}
        <Reveal className="relative order-2 mx-auto w-full max-w-[480px] lg:order-1">
          <div
            className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(84,168,255,0.16),transparent_65%)] blur-xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/40">
            <Image
              src={asset("/images/meimei/meimei-duo.webp")}
              alt="Два Меймей — дуо-концепт совместной игры"
              width={1179}
              height={819}
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <span className="glass rounded-lg px-3 py-1.5 text-[10px] font-bold tracking-[0.22em] text-accent-soft uppercase">
                Дуо-режим · концепт
              </span>
            </div>
          </div>
          {/* Угол-декор */}
          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-[2rem] border-r border-t border-accent/30" aria-hidden="true" />
          <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-[2rem] border-b border-l border-accent/30" aria-hidden="true" />
        </Reveal>

        {/* Текст */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About · О проекте"
            title={
              <>
                Тайкун, в котором <span className="text-gradient">персонаж важнее цифр</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
              <p>
                «Слово Меймея. Шерсть на крови» — это игра о росте. Вы начинаете с пустого участка,
                ручного сборщика и одного пушистого мечтателя. Дальше всё зависит от решений:
                что строить, что прокачивать и с кем драться за территорию.
              </p>
              <p>
                Обычные тайкуны заканчиваются, когда заканчиваются кнопки «улучшить». Здесь
                развитие ведёт персонажа через{" "}
                <span className="font-semibold text-frost">эволюции</span>, а империю — через{" "}
                <span className="font-semibold text-frost">новые территории</span>. Мемная
                харизма Меймей — это не украшение, а часть прогрессии: вы действительно хотите
                увидеть, каким он станет дальше.
              </p>
              <p>
                Возвращаться заставляет экономика, которая живёт даже без вас, и цели, которые
                нельзя закрыть за один вечер.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.12 + i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/8 bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/80">
                  <p.icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-3 font-display text-sm font-bold text-frost">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
