"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/paths";

type Props = {
  src?: string; // путь к аватарке (если файла нет — покажутся инициалы)
  alt: string;
  initials: string;
  className?: string; // контейнер
};

/**
 * Аватар участника команды с фолбэком на инициалы:
 * пока файл аватарки не добавлен в public/images/team/, показываются инициалы.
 */
export function MemberAvatar({ src, alt, initials, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span
        className={`grid place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/40 to-accent/10 font-display text-xl font-black text-frost ${className}`}
      >
        {initials}
      </span>
    );
  }

  return (
    <span className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes="64px"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
