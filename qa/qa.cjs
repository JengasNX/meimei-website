/* QA-скрипт: скриншоты + проверка консоли (запускать при поднятом `npm run start`). */
const { chromium } = require("playwright-core");

(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push("[console] " + msg.text());
  });
  page.on("pageerror", (err) => errors.push("[pageerror] " + err.message));
  page.on("requestfailed", (req) => errors.push("[requestfailed] " + req.url() + " :: " + (req.failure()?.errorText ?? "")));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);

  // Desktop: hero
  await page.screenshot({ path: "qa/desktop-hero.png" });
  // Доскролл по всем секциям
  const sections = await page.evaluate(() => Array.from(document.querySelectorAll("section[id]")).map((s) => s.id));
  console.log("SECTIONS:", sections.join(", "));
  for (const id of sections) {
    await page.evaluate((sid) => document.getElementById(sid)?.scrollIntoView(), id);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `qa/section-${id}.png` });
  }
  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on("pageerror", (err) => errors.push("[mobile pageerror] " + err.message));
  await mobile.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await mobile.waitForTimeout(2000);
  await mobile.screenshot({ path: "qa/mobile-hero.png" });
  // Открыть мобильное меню
  await mobile.click('button[aria-label="Открыть меню"]');
  await mobile.waitForTimeout(600);
  await mobile.screenshot({ path: "qa/mobile-menu.png" });
  // Горизонтальный overflow?
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log("MOBILE OVERFLOW PX:", overflow);

  console.log("ERRORS:", errors.length ? errors.join("\n") : "none");
  await browser.close();
})().catch((e) => {
  console.error("QA FAILED:", e);
  process.exit(1);
});
