import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://PierreLEDEZ.github.io',
  base: '/',
  integrations: [tailwind()],
});
