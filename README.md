# keelokit.com

The site for [Keelokit](https://github.com/leosimini/keelokit), a Claude Code harness for TypeScript monorepos.
Static Astro, English at `/` and Spanish at `/es`. Every push to `main` deploys on Vercel.

```bash
npm install
npm run dev
```

Content lives in `src/i18n.ts`; the hero scene is `src/components/Foil.astro`.

The "Latest release" line needs nothing on a release: `src/lib/release.ts` reads the version from
Keelokit's `release` branch at build time, and the browser refreshes it on every visit. What does
need a look when a release changes them is the terminal examples in `src/lib/content.ts` (the
output of `verify`, `doctor` and the guard) and the commands, rules and CI steps in `src/i18n.ts`.
