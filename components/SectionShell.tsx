import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Тонкая полоса-разделитель сверху. */
  divider?: boolean;
};

export function SectionShell({ id, children, className = "", divider = true }: SectionShellProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 ${divider ? "border-t border-white/5" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p
        className={`flex items-center gap-3 font-display text-[11px] font-bold tracking-[0.32em] text-accent uppercase ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-gradient-to-l from-accent to-transparent" aria-hidden="true" />}
      </p>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] text-frost sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{description}</p>}
    </Reveal>
  );
}

type DemoBadgeProps = { children?: ReactNode; className?: string };

/** Пометка «демо-данные» для честных заглушек. */
export function DemoBadge({ children = "Demo", className = "" }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-amber-300 uppercase ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
      {children}
    </span>
  );
}
