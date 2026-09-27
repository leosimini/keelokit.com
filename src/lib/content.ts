// Highlights /keelokit:<skill> wherever it appears in a sentence.
export const cmd = (s: string) => s.replace(/\/keelokit(:([a-z]+))?/g, (_m: string, _c: string, name?: string) =>
  `<span class="cmd"><span class="cmd-ns">/keelokit</span>${name ? `:<span class="cmd-name">${name}</span>` : ''}</span>`);
// Real output formats of verify, doctor and the guard (Keelokit 0.5.0's template/scripts/verify.sh,
// .keelokit/bin/doctor.py and guard.py); verify runs with an API and a web app, the doctor lines
// are an example project. Check them against the template when a release changes those scripts.
export type Line = [cls: string, text: string];
export const VERIFY: Line[] = [
  ['cmdline', 'pnpm verify --all'], ['step', '▶ Up to date with origin/main (GIT-1)'],
  ['step', '▶ Secret scan (gitleaks)'], ['step', '▶ Prisma client'], ['step', '▶ Format'],
  ['step', '▶ Lint'], ['step', '▶ Typecheck'], ['step', '▶ Harness doctor'],
  ['ok', '  ✔ harness healthy'], ['step', '▶ Unit tests'],
  ['step', '▶ Throwaway PostgreSQL (migrated, seeded)'], ['step', '▶ Integration tests (real PostgreSQL)'],
  ['step', '▶ Build'], ['step', '▶ End-to-end journeys'],
  ['step', '▶ End-to-end on the real stack (./apps/web)'], ['step', '▶ Dependency audit'],
  ['ok', '✔ verify passed'],
];
export const DOCTOR: Line[] = [
  ['cmdline', 'pnpm doctor'], ['', 'Keelokit doctor'],
  ['', '  Gates: intake ✓ → product ✓ → stack ✓ → skeleton ✓ → backlog ✓'],
  ['', '  Rules: 34 · Context gaps: 2 (0 blocking)'],
  ['', '  Invariants: 6 · Critical areas: 1 · Escapes logged: 2'],
  ['', '  Backlog: 4/11 done · next: AUTH-005, PAY-001'],
  ['warn', '  warn  exception for UI-1 until 2026-12-01: map SDK needs a literal colour'],
  ['err', "  ERROR rule QA-1: CI job 'unit' has continue-on-error"],
];
export const GUARD: Line[] = [
  ['agentline', 'git commit -m "wip" --no-verify'], ['err', 'Blocked by Keelokit — QA-2: never bypass git hooks'],
  ['', ' '],
  ['agentline', 'echo "API_KEY=…" > apps/api/.env'],
  ['err', "Blocked by Keelokit — SEC-2: don't write .env files from the shell;"],
  ['err', 'edit .env.example, real values go in the secret store'],
];

// The file tree is written with box-drawing prefixes for readability; the page draws it with CSS
// (indent guides), because many monospace fonts lack those glyphs and stretch the lines.
export const treeRows = (rows: string[][]) =>
  rows.map(([path, note]) => {
    const prefix = path.match(/^[│├└─\s]*/)![0];
    return { name: path.slice(prefix.length), note, depth: Math.round(prefix.length / 3) };
  });
