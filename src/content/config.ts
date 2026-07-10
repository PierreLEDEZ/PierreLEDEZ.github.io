import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    ctx: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional().default(''),
    link: z.string().optional().default(''),
    image: z.string().optional().default(''),
    order: z.number(),
    lang: z.enum(['en', 'fr']),
    alternateSlug: z.string().optional().default(''),
    personal: z.boolean().optional().default(false),
    // Set to false to hide a project from the site entirely (list + detail
    // page). Coupled across languages via alternateSlug — see src/lib/projects.ts.
    published: z.boolean().optional().default(true),
  }),
});

export const collections = { projects };
