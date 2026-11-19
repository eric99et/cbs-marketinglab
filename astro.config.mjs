import { defineConfig } from 'astro/config';

// GitHub Pages: https://eric99et.github.io/cbs-marketinglab/
// When cbsmarketinglab.dk is bought: set site to the domain and base to '/'.
export default defineConfig({
  site: 'https://eric99et.github.io',
  base: '/cbs-marketinglab',
  trailingSlash: 'ignore',
});
