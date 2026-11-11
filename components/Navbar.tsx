"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, PawPrint, X } from "lucide-react";
import { navigation, navigationFull } from "@/data/navigation";
import { links } from "@/config/site";

function Logo() {
  return (
    <Link href="#home" className="group flex items-center gap-3" aria-label="Слово Меймея — на главную">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-surface/80">
        <PawPrint className="h-5 w-5 text-accent transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        <span className="absolute inset-0 rounded-xl bg-accent/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[13px] font-bold tracking-[0.18em] text-frost uppercase">
          Слово Меймея
        </span>
        <span className="block text-[10px] font-semibold tracking-[0.32em] text-mist uppercase">
          Шерсть на крови
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const playHref = links.roblox || "#community";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-[0_12px_40px_rgba(0,0,0,0.45)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Основная навигация">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-mist transition-colors hover:bg-white/5 hover:text-frost"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={playHref}
            {...(links.roblox ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-lg bg-accent px-5 text-[13px] font-bold tracking-wide text-night transition-all hover:glow-accent hover:brightness-110"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            PLAY NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface/70 text-frost lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-night/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-6">
          {navigationFull.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 font-display text-lg font-semibold text-frost transition-colors hover:text-accent"
              >
                {item.label}
                <span className="font-sans text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={playHref}
              onClick={() => setOpen(false)}
              {...(links.roblox ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-14 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold tracking-widest text-night"
            >
              PLAY NOW
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
