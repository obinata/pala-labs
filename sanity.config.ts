import blogPost from "./sanity/schemas/blogPost";

export const schemaTypes = [blogPost];

export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: process.env.SANITY_DATASET || "production",
  schemaTypes,
};
