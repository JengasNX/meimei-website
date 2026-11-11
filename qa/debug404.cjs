/* Диагностика 404 на проде */
const { chromium } = require("playwright-core");

(async () => {
  const b = await chromium.launch({ channel: "msedge", headless: true });
  const p = await b.newPage();
  p.on("response", async (r) => {
    if (r.status() >= 400) {
      const req = r.request();
      console.log(r.status(), req.resourceType(), req.url());
      const tail = req.url().split("/").pop().replace(/[?&=].*$/, "");
      try {
        const info = await p.evaluate((t) => {
          const el =
            document.querySelector(`img[src*="${t}"]`) ||
            document.querySelector(`link[href*="${t}"]`) ||
            document.querySelector(`meta[content*="${t}"]`);
          return el ? el.outerHTML.slice(0, 220) : "NOT-IN-DOM";
        }, tail);
        console.log("  DOM:", info);
      } catch {}
    }
  });
  await p.goto("https://jengasnx.github.io/meimei-website/", { waitUntil: "networkidle", timeout: 90000 });
  await p.waitForTimeout(1500);
  await b.close();
})();
