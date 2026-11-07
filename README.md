# keelokit.com

The site for [Keelokit](https://github.com/leosimini/keelokit) and [Keelokit Harbor](https://github.com/leosimini/keelokit-harbor), two Claude Code plugins.
Static Astro, English at `/` and Spanish at `/es`. Pages: `/` (which one to install), `/keelokit`, `/keelokit/technical`, `/harbor`, `/harbor/how-it-works`. Every push to `main` deploys on Vercel.

```bash
npm install
npm run dev
```

Copy lives in `src/copy/`, one module per page (`common.ts` has what is shared); the illustrations are `src/components/art/` and the Keelokit hero scene is `src/components/Foil.astro`. Harbor has no release: its "0.1.0 · not released" badge is written by hand in `copy/common.ts`.

The "Latest release" line needs nothing on a release: `src/lib/release.ts` reads the version from
Keelokit's `release` branch at build time, and the browser refreshes it from the same source,
caching it for an hour (`localStorage`) so it doesn't ask GitHub on every page. If that fetch fails,
the page keeps showing what it had from the last successful build or check — no error, no layout
shift. What does need a look when a release changes them is the terminal examples in
`src/lib/content.ts` (the output of `verify`, `doctor` and the guard) and the commands, rules and CI
steps in `src/copy/technical.ts`.
