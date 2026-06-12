import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const BRAND_DIR = path.resolve(__dirname, "../public/brand");
const OUT_ZIP = path.join(BRAND_DIR, "arasaka-brand-assets.zip");

function createLogoSVG(bgColor: string, textColor: string, width: number, height: number, fontSize: number) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text
    x="50%"
    y="50%"
    dominant-baseline="central"
    text-anchor="middle"
    font-family="Russo One, sans-serif"
    font-size="${fontSize}"
    font-weight="400"
    letter-spacing="-0.01em"
    fill="${textColor}"
  >арасака</text>
</svg>`;
}

async function main() {
  if (fs.existsSync(OUT_ZIP)) fs.unlinkSync(OUT_ZIP);

  const svgFiles = [
    { name: "arasaka-logo-white-bg.svg", bg: "#ffffff", color: "#008b96", w: 480, h: 200, fontSize: 52 },
    { name: "arasaka-logo-gray-bg.svg", bg: "#f1f2f4", color: "#008b96", w: 480, h: 200, fontSize: 52 },
    { name: "arasaka-logo-dark-bg.svg", bg: "#00313C", color: "#ffffff", w: 480, h: 200, fontSize: 52 },
    { name: "arasaka-logo-dark-mint-bg.svg", bg: "#00313C", color: "#77e2c3", w: 480, h: 200, fontSize: 52 },
    { name: "arasaka-social-white-1080x1080.svg", bg: "#ffffff", color: "#008b96", w: 1080, h: 1080, fontSize: 140 },
    { name: "arasaka-social-gray-1080x1080.svg", bg: "#f1f2f4", color: "#008b96", w: 1080, h: 1080, fontSize: 140 },
    { name: "arasaka-social-dark-1080x1080.svg", bg: "#00313C", color: "#ffffff", w: 1080, h: 1080, fontSize: 140 },
    { name: "arasaka-social-dark-mint-1080x1080.svg", bg: "#00313C", color: "#77e2c3", w: 1080, h: 1080, fontSize: 140 },
  ];

  for (const svg of svgFiles) {
    const content = createLogoSVG(svg.bg, svg.color, svg.w, svg.h, svg.fontSize);
    fs.writeFileSync(path.join(BRAND_DIR, svg.name), content);
    console.log(`✓ Created ${svg.name}`);
  }

  const readme = `АРАСАКА — Бренд-ассеты
========================

Содержимое архива:
------------------

Стандартные логотипы (480×200, PNG @2x — 960×400):
  • arasaka-logo-white-bg.svg / .png     — Логотип на белом фоне (текст бирюзовый #008b96)
  • arasaka-logo-gray-bg.svg / .png      — Логотип на сером фоне #f1f2f4 (текст бирюзовый #008b96)
  • arasaka-logo-dark-bg.svg / .png       — Логотип на тёмно-зелёном фоне #00313C (текст белый)
  • arasaka-logo-dark-mint-bg.svg / .png  — Логотип на тёмно-зелёном фоне #00313C (текст мятный #77e2c3)

Логотипы для социальных сетей (1080×1080, PNG @2x — 2160×2160):
  • arasaka-social-white-1080x1080.svg / .png     — На белом фоне (текст бирюзовый)
  • arasaka-social-gray-1080x1080.svg / .png      — На сером фоне (текст бирюзовый)
  • arasaka-social-dark-1080x1080.svg / .png       — На тёмно-зелёном фоне (текст белый)
  • arasaka-social-dark-mint-1080x1080.svg / .png  — На тёмно-зелёном фоне (текст мятный #77e2c3)

Фирменные цвета:
  • Тёмно-зелёный (фон подвала): #00313C
  • Бирюзовый (основной акцент): #008b96
  • Мятный (дополнительный акцент): #77e2c3
  • Серый (фон): #f1f2f4
  • Белый: #ffffff

Шрифт логотипа: Russo One
Текст логотипа: арасака (строчные буквы, letter-spacing: -0.01em)

© ${new Date().getFullYear()} Арасака. Все права защищены.
`;
  fs.writeFileSync(path.join(BRAND_DIR, "README.txt"), readme);
  console.log("✓ Created README.txt");

  const filesToZip = fs.readdirSync(BRAND_DIR).filter(f =>
    (f.endsWith(".png") || f.endsWith(".svg") || f === "README.txt") && !f.startsWith("russo-one")
  );

  const zipPath = path.join(BRAND_DIR, "arasaka-brand-assets.zip");
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

  execSync(`cd "${BRAND_DIR}" && zip arasaka-brand-assets.zip ${filesToZip.join(" ")}`, { stdio: "inherit" });

  const zipSize = fs.statSync(zipPath).size;
  console.log(`\n✓ Created arasaka-brand-assets.zip (${(zipSize / 1024).toFixed(0)} KB)`);

  // Clean up temp files (keep only PNG and ZIP in public/brand)
  for (const f of filesToZip) {
    if (f.endsWith(".svg") || f === "README.txt") {
      fs.unlinkSync(path.join(BRAND_DIR, f));
    }
  }
  for (const f of fs.readdirSync(BRAND_DIR)) {
    if (f.startsWith("russo-one")) {
      fs.unlinkSync(path.join(BRAND_DIR, f));
    }
  }

  console.log("\nDone! Brand assets ready.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
