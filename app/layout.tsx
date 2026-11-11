import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

/** Заголовочный геометрический шрифт (поддерживает кириллицу). */
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
});

/** Основной текст (поддерживает кириллицу). */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline} — официальный сайт Roblox-игры`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Слово Меймея",
    "Шерсть на крови",
    "Meimei",
    "Roblox",
    "тайкун",
    "симулятор",
    "эволюция",
    "tycoon",
    "игра",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/meimei/meimei-main.webp",
        width: 1180,
        height: 1248,
        alt: "Меймей — главный герой игры «Слово Меймея. Шерсть на крови»",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080B12",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-night font-sans text-frost">{children}</body>
    </html>
  );
}
