# CBS MarketingLab website

Live: https://eric99et.github.io/cbs-marketinglab/

Built with [Astro](https://astro.build) and [GSAP](https://gsap.com). Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

```sh
npm install
npm run dev
```

## Where things live

- `src/pages/index.astro` - start page (all chapters, events and partner lists at the top of the file)
- `src/components/Header.astro` - minimal header and the whiteboard menu
- `src/components/Footer.astro` - contact and socials
- `src/styles/global.css` - brand tokens (colours and fonts are provisional until the board confirms)
- `public/img/` - images (currently cropped from Instagram; replace with full-resolution originals)

## Custom domain later

When `cbsmarketinglab.dk` is bought: set `site` to the domain and `base` to `/` in `astro.config.mjs`, add `public/CNAME` with the domain, and set the domain under Settings > Pages.
