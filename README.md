# Слово Меймея. Шерсть на крови — сайт игры

Официальный презентационный сайт Roblox-игры «Слово Меймея. Шерсть на крови»
(Tycoon + Simulator + Evolution).

## Стек

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (токены дизайн-системы в `app/globals.css`)
- **Framer Motion** — scroll-анимации (с поддержкой `prefers-reduced-motion`)
- **Lucide Icons** — иконки (без эмодзи-иконок)
- Шрифты: Unbounded (заголовки) + Inter (текст), обе с кириллицей

## Запуск

```bash
npm install
npm run dev          # разработка
npm run build        # прод-сборка
npm run start        # прод-сервер
npm run lint         # ESLint
npm run build:pages  # статический экспорт для GitHub Pages (out/)
```

## Публикация

Сайт автоматически деплоится на GitHub Pages при пуше в `main`
(см. `.github/workflows/deploy.yml`):

**https://jengasnx.github.io/meimei-website/**

## Структура

```
app/            — страницы, layout, globals.css, robots.ts, sitemap.ts, icon.svg
components/     — общие компоненты (Navbar, Footer, ParticleField, motion, иконки)
sections/       — 13 секций сайта (Hero, About, Gameplay, Tycoon, Evolution, Combat,
                  Progression, Features, Updates, Leaderboard, Shop, Team, Community)
data/           — весь демонстрационный контент (новости, магазин, лидеры, команда…)
config/site.ts  — единый конфиг: внешние ссылки, мета-данные, пути к изображениям
public/images/  — изображения Меймей
qa/             — QA-скрипт и скриншоты (playwright-core + системный Edge)
```

## Что нужно заменить перед запуском

| Где | Что |
|---|---|
| `config/site.ts` | ссылки Roblox / Discord / соцсети (сейчас пустые заглушки `""`), домен `url` |
| `data/updates.ts` | реальные новости (сейчас раздел пуст, без вымысла) |
| `data/leaderboard.ts` | подключение реальной статистики (сейчас таблица пуста) |
| `data/shop.ts` | утверждённый ассортимент и цены (сейчас пусто) |
| `data/combat.ts`, `data/evolutions.ts` | утверждённые характеристики по мере разработки |

## Изображения персонажа

- `public/images/meimei/meimei-main.webp` — главный портрет (Hero)
- `public/images/meimei/meimei-duo.webp` — дуо-концепт (About)
- `public/images/meimei/meimei-evolution-green.webp` — неоновая эволюция (Evolution, Features)

## QA

При поднятом `npm run start`: `node qa/qa.cjs` — обходит все секции,
делает скриншоты desktop/mobile, проверяет ошибки консоли и
горизонтальный overflow.
