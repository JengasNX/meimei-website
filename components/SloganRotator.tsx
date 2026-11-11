"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { slogans } from "@/data/features";

/** Цикличная смена рекламных слоганов. */
export function SloganRotator() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || slogans.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slogans.length), 3600);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <p key={index} className="text-lg font-medium text-accent-soft/90 transition-opacity duration-500 sm:text-xl">
      «{slogans[index]}»
    </p>
  );
}
