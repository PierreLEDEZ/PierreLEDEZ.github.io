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
  }),
});

export const collections = { projects };
