import { PawPrint } from "lucide-react";
import { links, site } from "@/config/site";
import { navigationFull } from "@/data/navigation";

function SocialLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return (
      <span
        className="cursor-not-allowed text-sm text-mist/50"
        title="Ссылка будет добавлена после запуска"
      >
        {label}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-mist transition-colors hover:text-accent">
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-abyss">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface">
              <PawPrint className="h-5 w-5 text-accent" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold tracking-[0.16em] text-frost uppercase">Слово Меймея</p>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-mist uppercase">Шерсть на крови</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
            {site.description}
          </p>
        </div>

        <nav aria-label="Навигация в футере">
          <p className="font-display text-xs font-bold tracking-[0.24em] text-frost uppercase">Разделы</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {navigationFull.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-mist transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-xs font-bold tracking-[0.24em] text-frost uppercase">Сообщество</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li><SocialLink href={links.roblox} label="Roblox — играть" /></li>
            <li><SocialLink href={links.discord} label="Discord-сервер" /></li>
            <li><SocialLink href={links.telegram} label="Telegram" /></li>
            <li><SocialLink href={links.youtube} label="YouTube" /></li>
            <li><SocialLink href={links.tiktok} label="TikTok" /></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Слово Меймея. Все права защищены.</p>
          <p className="max-w-xl leading-relaxed">
            Независимый пользовательский проект для платформы Roblox. Не связан с Roblox Corporation.
            Roblox — товарный знак Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
