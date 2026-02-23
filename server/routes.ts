import type { Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path from "path";
import { sanityServer, ogPostQuery, type OgPostData } from "./sanity";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectOgTags(html: string, post: OgPostData): string {
  const title = escapeHtml(post.titleEn) + " — Pala Labs";
  const description = escapeHtml(post.excerptEn || "");

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
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

  if (post.imageUrl) {
    const imageUrl = escapeHtml(post.imageUrl);
    html = html.replace(
      /<meta property="og:image" content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${imageUrl}" />`
    );
    html = html.replace(
      /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image" content="${imageUrl}" />`
    );
  }

  return html;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/blog/:slug", async (req, res, next) => {
    try {
      const { slug } = req.params;
      const post = await sanityServer.fetch<OgPostData | null>(ogPostQuery(slug));

      if (!post) {
        return next();
      }

      const isProd = process.env.NODE_ENV === "production";
      const htmlPath = isProd
        ? path.resolve(__dirname, "public", "index.html")
        : path.resolve(__dirname, "..", "client", "index.html");

      let html = await fs.promises.readFile(htmlPath, "utf-8");
      html = injectOgTags(html, post);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      next(err);
    }
  });

  return httpServer;
}
