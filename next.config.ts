import type { NextConfig } from "next";

/**
 * Сборка для GitHub Pages включается переменной окружения GITHUB_PAGES=1:
 *  - output: "export" — полностью статический экспорт в out/
 *  - basePath/assetPrefix — /meimei-website (project pages)
 *  - images.unoptimized — без серверной оптимизации картинок
 * Локальная и обычная прод-сборка работают без этих флагов.
 */
const isPages = process.env.GITHUB_PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // PPR/cacheComponents несовместимы со статическим экспортом GitHub Pages
  ...(isPages ? {} : { cacheComponents: true, partialPrefetching: true }),
  ...(isPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
