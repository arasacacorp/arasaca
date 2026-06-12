import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import http from "http";

const OUT_DIR = path.resolve(__dirname, "../public/brand");

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // Clean up old PNG/ZIP files
  const oldFiles = fs.readdirSync(OUT_DIR);
  for (const f of oldFiles) {
    if (f.endsWith(".png") || f.endsWith(".zip")) {
      fs.unlinkSync(path.join(OUT_DIR, f));
    }
  }

  // Start a simple HTTP server to serve the HTML and font files
  const server = http.createServer((req, res) => {
    let filePath: string;
    if (req.url === "/") {
      filePath = path.resolve(__dirname, "generate-logos.html");
    } else {
      // Serve files from public/brand directory
      filePath = path.join(OUT_DIR, req.url!);
    }
    
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    
    const ext = path.extname(filePath);
    const contentTypes: Record<string, string> = {
      ".html": "text/html",
      ".css": "text/css",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
    };
    
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise<void>((resolve) => server.listen(8765, () => resolve()));
  console.log("HTTP server started on port 8765");

  // Update HTML to use relative URLs via the HTTP server
  const htmlContent = fs.readFileSync(path.resolve(__dirname, "generate-logos.html"), "utf-8");
  const updatedHtml = htmlContent
    .replace("url('/home/z/my-project/public/brand/russo-one-cyrillic-400-normal.woff2')", "url('/russo-one-cyrillic-400-normal.woff2')")
    .replace("url('/home/z/my-project/public/brand/russo-one-cyrillic-400-normal.woff')", "url('/russo-one-cyrillic-400-normal.woff')");
  
  const tempHtmlPath = path.resolve(__dirname, "generate-logos-http.html");
  fs.writeFileSync(tempHtmlPath, updatedHtml);

  // Start a second server that serves the updated HTML
  const htmlServer = http.createServer((req, res) => {
    let filePath: string;
    if (req.url === "/") {
      filePath = tempHtmlPath;
    } else {
      filePath = path.join(OUT_DIR, req.url!);
    }
    
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    
    const ext = path.extname(filePath);
    const contentTypes: Record<string, string> = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
    };
    
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise<void>((resolve) => htmlServer.listen(8766, () => resolve()));
  console.log("HTML server started on port 8766");

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 2400 },
  });
  const page = await context.newPage();

  await page.goto("http://localhost:8766/", { waitUntil: "networkidle" });
  
  // Wait extra for fonts
  await page.waitForTimeout(2000);

  // Check if font loaded by measuring element
  const fontLoaded = await page.evaluate(() => {
    const el = document.getElementById("logo-white");
    return el ? window.getComputedStyle(el).fontFamily : "not found";
  });
  console.log("Font family detected:", fontLoaded);

  // Define screenshots
  const screenshots = [
    { id: "logo-white", file: "arasaka-logo-white-bg.png" },
    { id: "logo-gray",  file: "arasaka-logo-gray-bg.png" },
    { id: "logo-dark",  file: "arasaka-logo-dark-bg.png" },
    { id: "social-white", file: "arasaka-social-white-1080x1080.png" },
    { id: "social-gray",  file: "arasaka-social-gray-1080x1080.png" },
    { id: "social-dark",  file: "arasaka-social-dark-1080x1080.png" },
  ];

  for (const shot of screenshots) {
    const el = page.locator(`#${shot.id}`);
    await el.screenshot({
      path: path.join(OUT_DIR, shot.file),
      omitBackground: false,
    });
    const size = fs.statSync(path.join(OUT_DIR, shot.file)).size;
    console.log(`✓ ${shot.file} (${(size / 1024).toFixed(1)} KB)`);
  }

  await browser.close();
  server.close();
  htmlServer.close();
  
  // Clean up temp file
  fs.unlinkSync(tempHtmlPath);

  console.log("\nAll logos generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
