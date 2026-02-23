import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export interface SanityBlogPost {
  _id: string;
  slug: string;
  titleEn: string;
  titleJa: string;
  excerptEn: string;
  excerptJa: string;
  contentEn?: any[];
  contentJa?: any[];
  category: string;
  imageUrl?: string;
  featuredImageUrl?: string;
  publishedAt: string;
}

export const blogPostQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  "slug": slug.current,
  titleEn,
  titleJa,
  excerptEn,
  excerptJa,
  contentEn[] {
    ...,
    _type == "image" => { ..., "url": asset->url },
    _type == "youtube" => { ..., url }
  },
  contentJa[] {
    ...,
    _type == "image" => { ..., "url": asset->url },
    _type == "youtube" => { ..., url }
  },
  category,
  "imageUrl": image.asset->url,
  "featuredImageUrl": featuredImage.asset->url,
  publishedAt
}`;

export const blogPostBySlugQuery = (slug: string) =>
  `*[_type == "blogPost" && slug.current == "${slug}"][0] {
  _id,
  "slug": slug.current,
  titleEn,
  titleJa,
  excerptEn,
  excerptJa,
  contentEn[] {
    ...,
    _type == "image" => { ..., "url": asset->url },
    _type == "youtube" => { ..., url }
  },
  contentJa[] {
    ...,
    _type == "image" => { ..., "url": asset->url },
    _type == "youtube" => { ..., url }
  },
  category,
  "imageUrl": image.asset->url,
  publishedAt
}`;
