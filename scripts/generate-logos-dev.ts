import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const OUT_DIR = path.resolve(__dirname, "../public/brand");
const DPI = 2; // 2x for high quality

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // Clean up old PNG/ZIP files
  const oldFiles = fs.readdirSync(OUT_DIR);
  for (const f of oldFiles) {
    if (f.endsWith(".png") || f.endsWith(".zip")) {
      fs.unlinkSync(path.join(OUT_DIR, f));
    }
  }

  const browser = await chromium.launch();
  const screenshots = [
    { id: "logo-white", file: "arasaka-logo-white-bg.png", w: 480, h: 200 },
    { id: "logo-gray", file: "arasaka-logo-gray-bg.png", w: 480, h: 200 },
    { id: "logo-dark", file: "arasaka-logo-dark-bg.png", w: 480, h: 200 },
    { id: "logo-dark-mint", file: "arasaka-logo-dark-mint-bg.png", w: 480, h: 200 },
    { id: "social-white", file: "arasaka-social-white-1080x1080.png", w: 1080, h: 1080 },
    { id: "social-gray", file: "arasaka-social-gray-1080x1080.png", w: 1080, h: 1080 },
    { id: "social-dark", file: "arasaka-social-dark-1080x1080.png", w: 1080, h: 1080 },
    { id: "social-dark-mint", file: "arasaka-social-dark-mint-1080x1080.png", w: 1080, h: 1080 },
  ];

  for (const shot of screenshots) {
    const context = await browser.newContext({
      viewport: { width: shot.w, height: shot.h },
      deviceScaleFactor: DPI,
    });
    const page = await context.newPage();

    await page.goto("http://localhost:3000/logo-gen", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);

    // Keep only the target element, remove everything else
    await page.evaluate((id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      document.body.innerHTML = "";
      document.body.style.cssText = "margin:0; padding:0; overflow:hidden;";
      document.body.appendChild(target);
      target.style.margin = "0";
      target.style.display = "flex";
    }, shot.id);

    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(OUT_DIR, shot.file),
      fullPage: false,
    });

    const size = fs.statSync(path.join(OUT_DIR, shot.file)).size;
    console.log(`✓ ${shot.file} (${(size / 1024).toFixed(1)} KB)`);

    await context.close();
  }

  await browser.close();
  console.log("\nAll logos generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
