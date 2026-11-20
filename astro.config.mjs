import { defineConfig } from 'astro/config';

// GitHub Pages: https://eric99et.github.io/cbs-marketinglab/
// Switching to cbsmarketinglab.dk: set site to 'https://cbsmarketinglab.dk', base to '/',
// rename public/CNAME.example to public/CNAME, and point DNS (CNAME www -> eric99et.github.io,
// A records @ -> 185.199.108-111.153). Then add the domain under Settings > Pages.
export default defineConfig({
  site: 'https://eric99et.github.io',
  base: '/cbs-marketinglab',
  trailingSlash: 'ignore',
});
