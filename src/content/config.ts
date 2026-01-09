import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  loader: glob({ pattern: "**/[^_]*.(md|mdx)", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const til = defineCollection({
  loader: glob({ pattern: "**/[^_]*.(md|mdx)", base: "./src/content/til" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: "**/[^_]*.(md|mdx)", base: "./src/content/art" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    mainImage: z.string(), // just the filename, we'll auto-discover the path
    images: z.array(z.string()).optional(), // optional array of additional image filenames
    medium: z.string().optional(),
    dimensions: z.string().optional(),
  }),
});

export const collections = { blog, til, art };
