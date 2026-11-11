"use client";

import { useMemo, useState } from "react";
import { GameIcon } from "@/components/GameIcon";
import { Lock, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { shopCategories, shopItems } from "@/data/shop";

const rarityStyles = {
  steel: "border-mist/25 text-mist",
  accent: "border-accent/35 text-accent-soft",
  violet: "border-violet-400/35 text-violet-300",
  neon: "border-neon/40 text-neon",
} as const;

const rarityGlow = {
  steel: "",
  accent: "hover:shadow-[0_0_45px_rgba(84,168,255,0.12)]",
  violet: "hover:shadow-[0_0_45px_rgba(167,139,250,0.12)]",
  neon: "hover:shadow-[0_0_55px_rgba(57,255,114,0.15)]",
} as const;

export function Shop() {
  const [active, setActive] = useState<(typeof shopCategories)[number] | "Все">("Все");

  const items = useMemo(
    () => (active === "Все" ? shopItems : shopItems.filter((i) => i.category === active)),
    [active]
  );

  const hasItems = shopItems.length > 0;

  return (
    <SectionShell id="shop">
      <SectionHeading
        eyebrow="Shop · Магазин"
        title={
          <>
            Арсенал <span className="text-gradient">тайкуна</span>
          </>
        }
        description="Презентация ассортимента магазина. Это не реальная система оплаты — покупки и списание валюты здесь недоступны."
        align="center"
      />

      {hasItems && (
        <>
          {/* Фильтры категорий */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Категории магазина">
              {(["Все", ...shopCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-xl border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                    active === cat
                      ? "border-accent/50 bg-accent/15 text-accent-soft"
                      : "border-white/10 bg-surface/40 text-mist hover:border-white/20 hover:text-frost"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={0.04 * i} className="h-full">
                <article
                  className={`group flex h-full flex-col rounded-2xl border border-white/8 bg-surface/55 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 ${rarityGlow[item.rarityTone]}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-abyss transition-transform duration-300 group-hover:scale-110">
                      <GameIcon name={item.icon} className={`h-5 w-5 ${item.rarityTone === "neon" ? "text-neon" : item.rarityTone === "violet" ? "text-violet-300" : item.rarityTone === "accent" ? "text-accent" : "text-mist"}`} />
                    </span>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${rarityStyles[item.rarityTone]}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-bold text-frost">{item.name}</h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-widest text-mist/70 uppercase">{item.category}</p>
                  <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-mist">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/6 pt-4">
                    <span className="font-mono text-xs text-mist">{item.price}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-abyss px-3 py-1.5 text-[11px] font-bold text-mist/70">
                      <Lock className="h-3 w-3" />
                      Скоро
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </>
      )}

      {!hasItems && (
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-white/12 bg-surface/40 px-8 py-16 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10">
              <ShoppingBag className="h-6 w-6 text-accent" />
            </span>
            <p className="mt-5 font-display text-lg font-bold text-frost">Ассортимент скоро анонсируют</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Категории магазина уже определены: улучшения, косметика, особые формы Меймей,
              способности и бонусные предметы. Предметы появятся здесь после утверждения.
            </p>
          </div>
        </Reveal>
      )}
    </SectionShell>
  );
}
