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

export const collections = { blog, til };
