import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@sanity/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const CRAWLER_USER_AGENTS = [
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
  "Slackbot",
  "Discordbot",
  "WhatsApp",
  "TelegramBot",
  "Googlebot",
  "bingbot",
];

function isCrawler(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  return CRAWLER_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || "",
  dataset: process.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

interface OgPostData {
  titleEn: string;
  excerptEn: string;
  imageUrl?: string;
}

const ogPostQuery = (slug: string) =>
  `*[_type == "blogPost" && slug.current == "${slug}"][0] {
  titleEn,
  excerptEn,
  "imageUrl": image.asset->url
}`;

function injectOgTags(html: string, post: OgPostData): string {
  const title = escapeHtml(post.titleEn) + " &mdash; Pala Labs";
  const description = escapeHtml(post.excerptEn || "");
  const imageUrl = post.imageUrl
    ? escapeHtml(post.imageUrl)
    : "https://palalabs.org/og-default.png";

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(post.titleEn)} — Pala Labs</title>`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${imageUrl}" />`
  );

  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${imageUrl}" />`
  );

  return html;
}

const distPath = path.resolve(__dirname, "../dist/public");

app.use(express.static(distPath));

app.get("/{*path}", async (req, res) => {
  const ua = req.headers["user-agent"];
  const blogMatch = req.path.match(/^\/blog\/([^/]+)$/);

  const htmlPath = path.resolve(distPath, "index.html");

  if (!fs.existsSync(htmlPath)) {
    return res.status(500).send("Build not found");
  }

  let html = fs.readFileSync(htmlPath, "utf-8");

  if (isCrawler(ua) && blogMatch) {
    const slug = blogMatch[1];
    try {
      const post = await sanityServer.fetch<OgPostData | null>(ogPostQuery(slug));
      if (post) {
        html = injectOgTags(html, post);
      }
    } catch (err) {
      console.error("Sanity fetch error:", err);
    }
  }

  res.status(200).set({ "Content-Type": "text/html" }).send(html);
});

export default app;
