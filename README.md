# ETHConf 2027 — Travel & Venue

A design mockup of the travel page for ETHConf 2027 at the Javits Center, New York.

**Live preview:** _(added after first deploy)_

## What's here

A single marketing page with:

- a hero and venue gallery built from ETHConf 2026 photography
- a partner-hotel browser — filter by walk time to Javits and nightly rate, sort, and shortlist up to three stays to compare side by side
- getting-there guidance for subway, rail, and the three airports

The hotel filters are also exposed to a host model runtime as a `configure_hotel_filters` tool, so an assistant can drive the same controls a visitor sees (`hooks/use-hotel-filters.ts`).

## Structure

```
app/
  layout.tsx           fonts, metadata, skip link
  page.tsx             composes the sections
  globals.css          design tokens + component styles
components/site/       one file per page section
components/ui/         shadcn primitives
hooks/
  use-hotel-filters.ts filter + shortlist state, model-context tool
  use-active-section.ts nav scroll-spy
lib/hotels.ts          hotel data, filter options, sort logic
```

Colors live as tokens in `app/globals.css` (`ink`, `iris`, `paper`, `lime`, `ember`) and are used through Tailwind utilities — `bg-ink`, not `bg-[#10162f]`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

Rates, dates, and hotel details are placeholder content for the mockup.

This project was originally scaffolded with `vinext` targeting Cloudflare Workers. It now builds as a standard Next.js app so it can deploy to Vercel; the old config is kept in `.vinext-legacy/` (untracked).
