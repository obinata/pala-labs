import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export interface SanityBlogPost {
  _id: string;
  titleEn: string;
  titleJa: string;
  excerptEn: string;
  excerptJa: string;
  contentEn?: any[];
  contentJa?: any[];
  category: string;
  imageUrl?: string;
  publishedAt: string;
}

export const blogPostQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  titleEn,
  titleJa,
  excerptEn,
  excerptJa,
  contentEn,
  contentJa,
  category,
  "imageUrl": image.asset->url,
  publishedAt
}`;

export const blogPostByIdQuery = (id: string) =>
  `*[_type == "blogPost" && _id == "${id}"][0] {
  _id,
  titleEn,
  titleJa,
  excerptEn,
  excerptJa,
  contentEn,
  contentJa,
  category,
  "imageUrl": image.asset->url,
  publishedAt
}`;
