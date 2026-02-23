import { createClient } from "@sanity/client";

export const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: process.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export interface OgPostData {
  titleEn: string;
  excerptEn: string;
  ogImage?: string;
}

export const ogPostQuery = (slug: string) =>
  `*[_type == "blogPost" && slug.current == "${slug}"][0] {
  titleEn,
  excerptEn,
  "ogImage": featuredImage.asset->url
}`;
