import { Newspaper } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { updates, type UpdatePost } from "@/data/updates";

const categoryTone = {
  Обновление: "border-accent/35 bg-accent/10 text-accent-soft",
  Концепт: "border-neon/35 bg-neon/10 text-neon",
  Событие: "border-violet-400/35 bg-violet-400/10 text-violet-300",
  Devblog: "border-mist/30 bg-mist/10 text-mist",
} as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

function NewsCard({ post }: { post: UpdatePost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/55 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface/90 to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${categoryTone[post.category]}`}>
            {post.category}
          </span>
          <time dateTime={post.date} className="text-xs text-mist">{formatDate(post.date)}</time>
        </div>
        <h3 className="mt-3 font-display text-base font-bold leading-snug text-frost transition-colors group-hover:text-accent-soft">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{post.excerpt}</p>
      </div>
    </article>
  );
}

export function Updates() {
  return (
    <SectionShell id="updates">
      <SectionHeading
        eyebrow="Updates · Новости"
        title={
          <>
            Что происходит <span className="text-gradient">в мире Меймей</span>
          </>
        }
        description="Раздел обновлений проекта. Здесь появятся патчи, события и devblog — как только они выйдут."
      />

      {updates.length === 0 ? (
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-white/12 bg-surface/40 px-8 py-16 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10">
              <Newspaper className="h-6 w-6 text-accent" />
            </span>
            <p className="mt-5 font-display text-lg font-bold text-frost">Новостей пока нет</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Первый пост появится здесь вместе с ближайшим обновлением игры.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((post, i) => (
            <Reveal key={post.id} delay={0.08 * i} className="h-full">
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
