import type { Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path from "path";
import { sanityServer, ogPostQuery, type OgPostData } from "./sanity";

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

function injectOgTags(html: string, post: OgPostData, requestPath: string): string {
  const title = escapeHtml(post.titleEn) + " — Pala Labs";
  const description = escapeHtml(post.excerptEn || "");
  const ogImage = post.ogImage
    ? escapeHtml(post.ogImage)
    : "https://palalabs.org/og-default.png";
  const ogUrl = "https://palalabs.org" + requestPath;

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
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${ogUrl}" />`
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
    `<meta property="og:image" content="${ogImage}" />`
  );

  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  return html;
}

function getHtmlPath(): string {
  const isProd = process.env.NODE_ENV === "production";
  if (isProd) {
    return path.resolve(__dirname, "public", "index.html");
  }
  return path.resolve(process.cwd(), "client", "index.html");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/blog/:slug", async (req, res, next) => {
    const ua = req.headers["user-agent"];

    if (!isCrawler(ua)) {
      return next();
    }

    try {
      const { slug } = req.params;
      const post = await sanityServer.fetch<OgPostData | null>(ogPostQuery(slug));

      if (!post) {
        return next();
      }

      let html = await fs.promises.readFile(getHtmlPath(), "utf-8");
      html = injectOgTags(html, post, req.path);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      next(err);
    }
  });

  return httpServer;
}
