import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://forexcommoditynews.online',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  compressHTML: true,
});
