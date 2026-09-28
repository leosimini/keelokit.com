export type Locale = 'en' | 'es';

export type Command = { name: string; text: string; badge: boolean; steps: string[]; when: string };
export type CommandGroup = { id: string; label: string; lead: string; items: Command[] };

export const REPO = 'https://github.com/leosimini/keelokit';
export const AUTHOR = {
  name: 'Leopoldo Simini',
  url: 'https://leopoldosimini.com',
  github: 'https://github.com/leosimini',
  linkedin: 'https://www.linkedin.com/in/leopoldosimini/',
  handle: 'leosimini',
  // Same profiles as the Person on leopoldosimini.com, so search engines join both pages to one person.
  sameAs: [
    'https://www.linkedin.com/in/leopoldosimini/',
    'https://github.com/leosimini',
    'https://www.crunchbase.com/person/leopoldo-simini',
    'https://www.scrumalliance.org/members/71762',
    'https://www.goodreads.com/author/show/7513327.Leopoldo_Simini',
    'https://medium.com/@leosimini',
  ],
};
export const INSTALL = [
  'claude plugin marketplace add leosimini/keelokit',
  'claude plugin install keelokit@keelokit',
];

const en = {
  lang: 'en',
  title: 'Keelokit · a Claude Code harness for TypeScript monorepos',
  description:
    'A Claude Code harness for building apps in TypeScript monorepos: rules backed by checks, tests written before the code, and bugs caught by class. A hobby project by Leopoldo Simini (@leosimini).',
  ogAlt: 'The Keelokit icon, a hydrofoil board flying over the water, next to the name Keelokit.',
  nav: { how: 'How it starts', dashboard: 'Dashboard', commands: 'Commands', keel: 'The keel', try: 'Try it', switch: 'Español', switchHref: '/es' },
  hero: {
    eyebrow: 'Open source · a Claude Code harness',
    title: ['The keel under', 'my apps.'],
    lead:
      'The harness I use to turn ideas into first versions with coding agents: my stack, my rules, the way I like to work. I maintain it on weekends and late nights, with music on, and share it in case it helps you too.',
    github: 'View on GitHub',
    copy: 'Copy',
    copied: 'Copied',
    scroll: 'Dive in',
    release: 'Latest release',
    notes: 'What’s new',
  },
  surface: 'What you build rides on top. What keeps it on course sits underneath.',
  how: {
    depth: '−2 m',
    title: 'From an idea to a monorepo that runs',
    lead:
      '/keelokit:project-new walks you through five gates and shows each one on a dashboard. Stage by stage, it stops wherever your decision matters; in automatic mode, only where a person is required. Everything gets written down as it goes.',
    steps: [
      ['Intake', 'An interview that reads what you already have first, then asks only what’s missing. What nobody knows yet stays written as an open question, with an owner.'],
      ['Product', 'A short PRD: the problem, who it’s for, what’s in and, explicitly, what’s out.'],
      ['Stack', 'The house stack. Anything that deviates from it is recorded as a decision, not improvised.'],
      ['Skeleton', 'A generated monorepo with CI, git hooks and tests, green before you write a feature.'],
      ['Backlog', 'Epics and stories with acceptance scenarios and the rules they must keep, grouped in waves that never touch the same files.'],
    ],
    treeTitle: 'What you get',
    tree: [
      ['my-app/', ''],
      ['├─ apps/', ''],
      ['│  ├─ api/', 'NestJS · Prisma · PostgreSQL'],
      ['│  ├─ web/', 'Vite · React'],
      ['│  ├─ mobile/', 'Expo · iOS & Android'],
      ['│  └─ site/', 'Astro'],
      ['├─ packages/', ''],
      ['│  ├─ shared/', 'zod contracts · i18n'],
      ['│  └─ ui-tokens/', 'one source for the look'],
      ['├─ docs/context/', 'what’s known, what’s open'],
      ['├─ backlog/', 'stories with scenario ids'],
      ['└─ .keelokit/', 'rules, checks, guard, doctor'],
    ],
    treeNote: 'You pick which apps a product needs.',
    stackTitle: 'The stack it generates',
  },
  start: {
    title: 'Where to start',
    head: ['What you have', 'Start with', 'What you get'],
    rows: [
      ['An idea, nothing else', '/keelokit:project-new', 'A monorepo that runs, with CI, context and a first backlog'],
      ['A repo you already have', '/keelokit:project-adopt', 'The rules mapped to its checks, and the rest as dated debt'],
      ['A story to build', '/keelokit:build-story', 'Tests written first, code that passes them, a verified result'],
      ['Bugs that keep slipping through', '/keelokit:check-bugbash', 'Root-cause fixes, and a check that covers the whole class of every bug that escaped'],
      ['A project to follow', '/keelokit:project-dashboard', 'A light, live page: the next step to copy, what waits for you, every wave and its stories', 'new'],
      ['Someone to show it to', '/keelokit:project-report', 'The complete status, read-only, as a page to share or a file to export', 'new'],
      ['A product ready for users', '/keelokit:ship-setup', 'Staging and production set up and verified, then /keelokit:ship-release for each version'],
    ],
  },
  verifyTitle: 'The skeleton, checked end to end',
  note: {
    title: 'Why it exists',
    body: [
      'I’ve been writing software for many years and starting things for most of my life. Coding agents changed how I build: ideas that used to wait for a team or a free month now get a real first version.',
      'Along the way I kept writing the same instructions to agents, and kept finding the same kinds of bugs after they said “done”. Keelokit is what came out of fixing that, one project at a time. I share it in case it saves you a few detours.',
    ],
    sign: 'Leo',
  },
  commands: {
    depth: '−8 m',
    title: 'Every command',
    badge: 'New',
    lead: "Twelve commands and the entry point, grouped by what you’re doing. Open any of them to see what it does, step by step.",
    how: "What it does",
    when: "When",
    more: "How it works",
    groups: [
      { id: "project", label: "Project", lead: "Start one, bring one in, follow it", items: [
        { name: "/keelokit", text: "Where the project stands, what comes next, what’s waiting for your decision.", badge: false, steps: ["Reads the repo: approved stages, open questions, stories done and ready, the harness version.", "Answers in ten lines: where you are, the one next step, what waits for you.", "Opens the dashboard when a stage waits for you or a paused run resumes."], when: "Any time you open a session and wonder what to do." },
        { name: "/keelokit:project-new", text: "From an idea to a working skeleton: intake, PRD, stack, generated monorepo with CI, first backlog.", badge: false, steps: ["Asks once how it should work: stage by stage or automatic, one story at a time or in parallel.", "Interviews you about the product and writes the context, with open questions instead of guesses.", "Writes a short PRD and picks only the apps it needs; you approve scope and metrics.", "Generates the monorepo with CI, hooks and tests, green before any feature.", "Plans the backlog in development waves; the dashboard shows each stage as it goes."], when: "You have an idea and an empty folder." },
        { name: "/keelokit:project-adopt", text: "Adds only the harness to a repo you already have. What it doesn’t meet yet becomes a dated exception.", badge: false, steps: ["Reads the repo without running or changing anything, and works out what it is: a product with screens and a database, a service, a library, a CLI, a plugin.", "Installs only .keelokit/ and applies only the house rules that fit that kind of project, mapped to checks the repo already has.", "What it can’t meet yet becomes a dated exception you approve, with a story to pay it off.", "Writes a diagnosis of the real code and seeds the backlog; the dashboard shows what it found."], when: "You already have code and want the rules and checks without a rewrite." },
        { name: "/keelokit:project-dashboard", text: "The page you work from: light, live, and rebuilt from the repo.", badge: true, steps: ["Shows where the project is and the one next step, with its command ready to copy.", "Lists what waits for you: approvals, the decisions a bug bash or a security review left with the recommended option, environments still being set up.", "Shows every development wave with its stories, each linked to its file: done, ready to build, or waiting for another.", "Stays live: it’s published once, then each refresh updates the open page without sending it through the chat again, so it costs very few tokens."], when: "To see where things are, approve a stage, or pick up after a pause." },
        { name: "/keelokit:project-report", text: "The complete status of the project, read-only, to share or export.", badge: true, steps: ["Lays out every stage with its documents: context, open questions, the PRD’s scope and metrics, the stack, the backlog by wave and by epic.", "Adds every bug bash and security review with its findings, the environments, the decisions and the history.", "Publishes it as its own page you can share, or writes an HTML file that opens anywhere.", "It’s a snapshot for reading: no buttons that send requests, and a new one whenever you want to share a later state."], when: "To show the project to a partner, a client or an investor, or keep a record of where it stood." },
      ] },
      { id: "plan", label: "Plan", lead: "Know what to build", items: [
        { name: "/keelokit:plan-intake", text: "Reads briefs, notes or a repo, then asks only what’s missing. Never fills a gap with a guess.", badge: false, steps: ["Asks what already exists in writing and reads it first.", "Asks only what’s missing, at most four questions at a time, and only accepts measurable answers.", "Writes the context: product, domain and its invariants, constraints, environments, open questions.", "Every unknown stays a question with an owner."], when: "A new product, or a new feature that needs context." },
        { name: "/keelokit:plan-backlog", text: "Epics and stories with acceptance scenarios and the invariants they keep, in waves so parallel work never collides.", badge: false, steps: ["Splits the PRD into epics and stories you can see working end to end.", "Writes acceptance scenarios for each story and the invariants it must keep.", "Groups stories in development waves that never touch the same files, so they can be built in parallel.", "Shows you the order; stories that came from a bug bash or a security review say so."], when: "After the PRD, after a new feature intake, or to re-plan." },
      ] },
      { id: "build", label: "Build", lead: "Turn stories into working product", items: [
        { name: "/keelokit:build-story", text: "One story at a time, or a whole wave in parallel: tests first, then code, then people who didn’t write it try to break it.", badge: false, steps: ["Writes the story’s contract: every scenario, invariant and dimension it can break.", "A verifier writes the acceptance tests before any code; they fail for the right reason.", "A builder makes them pass without touching the tests.", "A reviewer reads the diff cold and a breaker attacks it: double submits, parallel requests, other tenants.", "The verifier walks it in the running app; only then does it land."], when: "A story is ready. One at a time, or several of the same wave at once." },
      ] },
      { id: "check", label: "Check", lead: "Find what slipped through, and keep it from coming back", items: [
        { name: "/keelokit:check-bugbash", text: "A bug hunt across data, API, integrity, UX, i18n, accessibility and security. Every escaped bug adds a check for its whole class.", badge: true, steps: ["Looks at what the project is and hunts accordingly: data model, contracts and screens for a product; developer experience, docs and packaging for a library or plugin.", "Another agent tries to refute each finding; only reproducible ones stay.", "Fixes each one at its root, with a failing test first.", "Adds a check for the whole class, logs the escape, and turns what’s left into stories."], when: "After each wave, and before a release." },
        { name: "/keelokit:check-security", text: "Security and privacy in depth: personal data, the law of each market, abuse of the critical journeys, scans.", badge: false, steps: ["Maps every piece of personal data: what, why, who sees it, for how long, where it goes.", "Names the privacy law of each market and what it asks of this product.", "Threat-models the critical journeys; scans dependencies, images and staging (OWASP ZAP).", "Checks personal data in logs, export and deletion, retention and encryption.", "Fixes with a test and a check per class; privacy choices and legal questions come to you."], when: "Before the first production release, and when a release touches personal data, auth or payments." },
        { name: "/keelokit:check-health", text: "Is every rule still backed by a check that works? Adds rules, registers exceptions.", badge: false, steps: ["Checks that every house rule has a check that looks alive: a test, a lint rule, a CI job, a git hook.", "Checks exceptions, context, invariants, critical areas and the backlog.", "Adds a new rule with its check, or registers a dated exception with your approval."], when: "When CI or the dashboard reports harness errors, or to add a rule." },
      ] },
      { id: "ship", label: "Ship", lead: "Get it in front of users", items: [
        { name: "/keelokit:ship-setup", text: "Staging and production for people who have never deployed: a guide, the automation, and proof for each step.", badge: false, steps: ["Writes a deploy guide with a checklist per environment, in plain words.", "Does what needs none of your credentials: Fly.io apps, config, GitHub environments with production approval, deploy tokens.", "Walks you through accounts, logins, payment and your own keys; it never types a credential.", "Verifies each step for real and shows it on the dashboard."], when: "After the skeleton, before the first release, or when an environment isn’t ready." },
        { name: "/keelokit:ship-release", text: "A version of your product people can name, read about and roll back to.", badge: false, steps: ["Picks the next version from what landed: new things, fixes, breaking changes.", "Writes release notes users understand, each line tied to its story or finding.", "Tags vX.Y.Z on main, only after your yes.", "Production deploys only after a person approves it in GitHub; it follows the deploy to the end."], when: "A wave is done and the last bug bash is clean." },
      ] },
      { id: "harness", label: "Harness", lead: "Keep the harness itself up to date", items: [
        { name: "/keelokit:harness-upgrade", text: "Maintenance of the harness, not of your app: brings Keelokit’s newer rules and checks into your project.", badge: false, steps: ["Compares the harness version your project runs with the new one.", "Merges the template’s changes on a branch: rules, doctor and guard, CI, hooks, base configs.", "Never rewrites your product code: apps, migrations, end-to-end tests and translations stay as they are.", "Resolves conflicts, runs the full checks, and asks you about any new rule that fails."], when: "After updating the plugin, or when the dashboard says the harness is behind." },
      ] },
    ] as CommandGroup[],
  },
  dash: {
    depth: '−11 m',
    badge: 'New in 0.8',
    title: 'One page to work from, one report to share',
    lead: '/keelokit:project-dashboard builds a short page from your repo, in your language: where the project is, the next step, what waits for you. It stays live, and it’s light: published once, then each refresh updates the open page without sending it through the chat again, so following a project costs very few tokens. For someone else, /keelokit:project-report generates the complete status, read-only, to share or export.',
    caption: 'Bookline, a sample project, halfway through its build',
    open: 'Open full size',
    darkCaption: 'Light or dark, one click',
    parts: [
      ['voyage', 'Where you are, and what comes next', 'The stages as one line of progress, the run decisions you took once, and the one next step with its command ready to copy.'],
      ['waiting', 'What waits for you', 'Approvals, the decisions a bug bash or a security review left with the option it recommends, environments still being set up, harness updates. Each links to its source and has its request ready.'],
      ['waves', 'Every wave, every story', 'Stories under their development wave, each linked to its file in the repo: done, ready to build (copy its command), or waiting for another. Finished waves fold away.'],
      ['health', 'Health and environments at a glance', 'The doctor, the last bug bash and security review with what they fixed, staging and production step by step — and the project’s documents one click away.'],
      ['ask', 'Copy it, or send it to Claude', 'Every button copies its request and fills this box: complete it, then send it to the Claude session watching the dashboard, or paste it into any chat.'],
      ['report', 'The full report, to share or export', '/keelokit:project-report lays out every stage with its documents, every finding, the decisions and the history. Read-only, as a page you can share or an HTML file that opens anywhere.'],
    ],
  },
  keel: {
    depth: '−15 m',
    title: 'The part you don’t see',
    lead: 'Agents kept telling me “done” and leaving bugs behind. These four ideas are what came out of fixing that, project after project.',
    principles: [
      ['A rule needs a check', 'Each rule points to something that verifies it: a test, a lint rule, a git hook, a CI job. The doctor tells you when a rule has lost its check.'],
      ['Unknowns stay questions', 'What nobody knows yet is written down with an owner and the exact question. Plausible defaults don’t get invented.'],
      ['The builder doesn’t grade itself', 'A verifier writes the acceptance tests before the code, a reviewer reads the diff cold, a breaker attacks the branch, and only the verifier can call a story done.'],
      ['Bugs come in classes', 'What must always hold (totals add up, a notice goes out once, a limit holds with two requests at once) is written as an invariant and proven with property, concurrency and replay tests. Critical code gets mutation testing, so its tests can actually fail.'],
    ],
    doctorTitle: 'The doctor, in a project',
    rulesTitle: 'A few house rules, and what enforces them',
    rules: [
      ['SEC-1', 'No secrets in the repo', 'secret scan in CI · guard · pre-commit'],
      ['CFG-1', 'Every config key documented', 'a test that compares schema, .env files and README'],
      ['AUTHZ-1', 'Every route has an access decision', 'a test that reads the real router'],
      ['I18N-1', 'Text only through translations', 'lint rule · locale parity test'],
      ['QA-4', 'No silenced tests', 'guard · pre-commit'],
      ['TRACE-1', 'Every scenario has a test', 'doctor, in CI'],
      ['INV-1', 'Every invariant proven by a test', 'doctor, in CI'],
      ['MUT-1', 'Tests of critical code that can fail', 'mutation score in CI'],
    ],
    example: 'Example output',
  },
  auto: {
    depth: '−24 m',
    title: 'What runs on its own',
    items: [
      ['Before every agent action', 'A guard stops secrets, edits to .env files and to applied migrations, skipped hooks, silenced tests and production deploys.'],
      ['When a session starts', 'A short status: where the project is and which stories are ready.'],
      ['On every commit and push', 'The same guard as a git hook, then the full local check before anything reaches the remote.'],
      ['In CI', 'Secret scan, lint and types, unit and integration tests on a real PostgreSQL, end-to-end journeys with an accessibility scan and against the real API, mutation testing of critical code, static analysis, a staging deploy.'],
    ],
    guardExample: 'The guard, stopping an agent',
  },
  honest: {
    depth: '−32 m',
    title: 'Good to know',
    items: [
      ['It’s opinionated', 'It’s built around my preferences and my stack. It won’t fit every project or every team. If your stack is different, /keelokit:project-adopt still gives you the rules and the checks.'],
      ['It uses tokens', 'build-story and check-bugbash run several agents per story. /keelokit:build-story --light exists for small changes.'],
      ['The guard is a speed bump', 'It stops agents from the obvious mistakes, but it isn’t a sandbox. Git hooks and CI are the real backstop.'],
      ['The doctor sees presence, not quality', 'It can tell a check exists and is switched on, not that it’s a good check. For critical code, mutation testing measures that; elsewhere, reviews and bug hunts cover it.'],
    ],
    learnedTitle: 'Ideas I learned from',
    learned: 'Spec-driven development (OpenSpec, Spec Kit), Superpowers for separating who builds from who reviews, Copier for templates that can be upgraded, and a lot of trial and error on my own projects.',
  },
  try: {
    depth: '−40 m',
    title: 'Try it',
    lead: 'In an empty folder run /keelokit:project-new. In a repo you already have, /keelokit:project-adopt.',
    needs: 'You need Node 22 with pnpm 10, Python 3.11+, uv, Docker and git. macOS or Linux.',
    github: 'Code, docs and license on GitHub',
  },
  footer: {
    made: 'Keelokit is a hobby project by',
    when: 'built on weekends and late nights, with music on.',
    license: 'MIT license',
  },
};

const es: typeof en = {
  lang: 'es',
  title: 'Keelokit · un harness de Claude Code para monorepos TypeScript',
  description:
    'Un harness de Claude Code para construir aplicaciones en monorepos TypeScript: reglas respaldadas por checks, tests escritos antes que el código y bugs atrapados por clase. Un proyecto hobby de Leopoldo Simini (@leosimini).',
  ogAlt: 'El ícono de Keelokit, una tabla con hidrofoil volando sobre el agua, junto al nombre Keelokit.',
  nav: { how: 'Cómo arranca', dashboard: 'Tablero', commands: 'Comandos', keel: 'La quilla', try: 'Probarlo', switch: 'English', switchHref: '/' },
  hero: {
    eyebrow: 'Open source · un harness de Claude Code',
    title: ['La quilla debajo', 'de mis apps.'],
    lead:
      'El harness que uso para convertir ideas en primeras versiones con agentes de código: mi stack, mis reglas, mi forma de trabajar. Lo mantengo los fines de semana y en noches de música y código, y lo comparto por si te sirve a vos también.',
    github: 'Ver en GitHub',
    copy: 'Copiar',
    copied: 'Copiado',
    scroll: 'Sumergirse',
    release: 'Última versión',
    notes: 'Novedades',
  },
  surface: 'Lo que construís va arriba. Lo que te mantiene el rumbo, abajo.',
  how: {
    depth: '−2 m',
    title: 'De una idea a un monorepo que funciona',
    lead:
      '/keelokit:project-new te lleva por cinco etapas y muestra cada una en un tablero. Por etapas, se frena donde importa tu decisión; en modo automático, solo donde hace falta una persona. Va dejando todo por escrito.',
    steps: [
      ['Intake', 'Una entrevista que primero lee lo que ya tenés y después pregunta solo lo que falta. Lo que nadie sabe todavía queda escrito como pregunta abierta, con un responsable.'],
      ['Producto', 'Un PRD corto: el problema, para quién es, qué entra y, explícitamente, qué queda afuera.'],
      ['Stack', 'El stack de la casa. Lo que se desvía queda registrado como decisión, no improvisado.'],
      ['Esqueleto', 'Un monorepo generado con CI, hooks de git y tests, en verde antes de escribir una feature.'],
      ['Backlog', 'Épicas e historias con escenarios de aceptación y las reglas que tienen que respetar, agrupadas en olas de desarrollo que nunca tocan los mismos archivos.'],
    ],
    treeTitle: 'Lo que obtenés',
    tree: [
      ['mi-app/', ''],
      ['├─ apps/', ''],
      ['│  ├─ api/', 'NestJS · Prisma · PostgreSQL'],
      ['│  ├─ web/', 'Vite · React'],
      ['│  ├─ mobile/', 'Expo · iOS y Android'],
      ['│  └─ site/', 'Astro'],
      ['├─ packages/', ''],
      ['│  ├─ shared/', 'contratos zod · i18n'],
      ['│  └─ ui-tokens/', 'una sola fuente para el diseño'],
      ['├─ docs/context/', 'lo que se sabe y lo que falta'],
      ['├─ backlog/', 'historias con ids de escenario'],
      ['└─ .keelokit/', 'reglas, checks, guard, doctor'],
    ],
    treeNote: 'Elegís qué apps necesita cada producto.',
    stackTitle: 'El stack que genera',
  },
  start: {
    title: 'Por dónde empezar',
    head: ['Qué tenés', 'Empezá con', 'Qué obtenés'],
    rows: [
      ['Una idea, nada más', '/keelokit:project-new', 'Un monorepo que funciona, con CI, contexto y un primer backlog'],
      ['Un repo que ya existe', '/keelokit:project-adopt', 'Las reglas mapeadas a sus checks, y el resto como deuda con fecha'],
      ['Una historia para construir', '/keelokit:build-story', 'Tests escritos primero, código que los pasa y un resultado verificado'],
      ['Bugs que se siguen escapando', '/keelokit:check-bugbash', 'Arreglos en la causa raíz, y un check que cubre toda la clase de cada bug que se escapó'],
      ['Un proyecto para seguir', '/keelokit:project-dashboard', 'Una página liviana y en vivo: el próximo paso para copiar, lo que te espera, cada ola con sus historias', 'new'],
      ['Alguien a quien mostrárselo', '/keelokit:project-report', 'El estado completo, de solo lectura, como página para compartir o archivo para exportar', 'new'],
      ['Un producto listo para usuarios', '/keelokit:ship-setup', 'Staging y producción configurados y verificados, y después /keelokit:ship-release para cada versión'],
    ],
  },
  verifyTitle: 'El esqueleto, verificado de punta a punta',
  note: {
    title: 'Por qué existe',
    body: [
      'Hace muchos años que escribo software y casi toda la vida que emprendo cosas. Los agentes de código cambiaron mi forma de construir: ideas que antes esperaban un equipo o un mes libre ahora tienen una primera versión real.',
      'En el camino me encontré escribiéndoles siempre las mismas instrucciones a los agentes, y encontrando los mismos tipos de bugs después de que decían “listo”. Keelokit es lo que salió de ir resolviendo eso, proyecto a proyecto. Lo comparto por si te ahorra algunas vueltas.',
    ],
    sign: 'Leo',
  },
  commands: {
    depth: '−8 m',
    title: 'Todos los comandos',
    badge: 'Nuevo',
    lead: "Doce comandos y la entrada, agrupados según lo que estés haciendo. Abrí cualquiera para ver qué hace, paso a paso.",
    how: "Qué hace",
    when: "Cuándo",
    more: "Cómo funciona",
    groups: [
      { id: "project", label: "Proyecto", lead: "Empezar uno, sumar uno existente, seguirlo", items: [
        { name: "/keelokit", text: "Dónde está el proyecto, qué sigue y qué espera tu decisión.", badge: false, steps: ["Lee el repo: etapas aprobadas, preguntas abiertas, historias terminadas y listas, la versión del harness.", "Responde en diez líneas: dónde estás, el próximo paso, qué te espera.", "Abre el tablero cuando una etapa te espera o se retoma un proceso a medias."], when: "Cada vez que abrís una sesión y no sabés por dónde seguir." },
        { name: "/keelokit:project-new", text: "De una idea a un esqueleto que funciona: intake, PRD, stack, monorepo generado con CI y primer backlog.", badge: false, steps: ["Pregunta una sola vez cómo trabajar: por etapas o automático, de a una historia o en paralelo.", "Te entrevista sobre el producto y escribe el contexto, con preguntas abiertas en lugar de suposiciones.", "Escribe un PRD corto y elige solo las aplicaciones que hacen falta; vos aprobás el alcance y las métricas.", "Genera el monorepo con CI, hooks y tests, en verde antes de cualquier funcionalidad.", "Planifica el backlog en olas de desarrollo; el tablero muestra cada etapa a medida que avanza."], when: "Tenés una idea y una carpeta vacía." },
        { name: "/keelokit:project-adopt", text: "Suma solo el harness a un repo que ya tenés. Lo que todavía no cumple queda como excepción con fecha.", badge: false, steps: ["Lee el repo sin correr ni cambiar nada, y entiende qué es: un producto con pantallas y base de datos, un servicio, una librería, una CLI, un plugin.", "Instala solo .keelokit/ y aplica solo las reglas de la casa que corresponden a ese tipo de proyecto, mapeadas a controles que el repo ya tiene.", "Lo que todavía no puede cumplir queda como excepción con fecha que vos aprobás, con una historia para saldarla.", "Escribe un diagnóstico del código real y arma el backlog; el tablero muestra lo que encontró."], when: "Ya tenés código y querés las reglas y los controles sin reescribir nada." },
        { name: "/keelokit:project-dashboard", text: "La página desde la que trabajás: liviana, en vivo y armada desde el repo.", badge: true, steps: ["Muestra dónde está el proyecto y el único próximo paso, con su comando listo para copiar.", "Lista lo que te espera: aprobaciones, las decisiones que dejó un bug bash o una revisión de seguridad con la opción recomendada, entornos a medio configurar.", "Muestra cada ola de desarrollo con sus historias, cada una con el link a su archivo: hecha, lista para construir o esperando a otra.", "Se mantiene en vivo: se publica una vez y cada actualización cambia la página abierta sin volver a pasarla por el chat, así que gasta muy pocos tokens."], when: "Para ver dónde está todo, aprobar una etapa o retomar después de una pausa." },
        { name: "/keelokit:project-report", text: "El estado completo del proyecto, de solo lectura, para compartir o exportar.", badge: true, steps: ["Muestra cada etapa con sus documentos: el contexto, las preguntas abiertas, el alcance y las métricas del PRD, el stack, el backlog por ola y por épica.", "Suma cada bug bash y cada revisión de seguridad con sus hallazgos, los entornos, las decisiones y el historial.", "Lo publica como una página propia que podés compartir, o escribe un archivo HTML que se abre en cualquier lado.", "Es una foto para leer: sin botones que envían pedidos, y uno nuevo cada vez que quieras compartir un estado posterior."], when: "Para mostrarle el proyecto a un socio, un cliente o un inversor, o guardar registro de cómo estaba." },
      ] },
      { id: "plan", label: "Planificar", lead: "Saber qué construir", items: [
        { name: "/keelokit:plan-intake", text: "Lee briefs, notas o un repo, y pregunta solo lo que falta. Nunca completa un hueco adivinando.", badge: false, steps: ["Pregunta qué hay escrito y lo lee primero.", "Pregunta solo lo que falta, como mucho cuatro preguntas por vez, y solo acepta respuestas medibles.", "Escribe el contexto: producto, dominio y sus invariantes, restricciones, entornos, preguntas abiertas.", "Todo lo que no se sabe queda como pregunta con un responsable."], when: "Un producto nuevo, o una funcionalidad nueva que necesita contexto." },
        { name: "/keelokit:plan-backlog", text: "Épicas e historias con escenarios de aceptación y los invariantes que respetan, en olas de desarrollo para que el trabajo en paralelo no choque.", badge: false, steps: ["Divide el PRD en épicas e historias que se pueden ver funcionando de punta a punta.", "Escribe los escenarios de aceptación de cada historia y los invariantes que tiene que respetar.", "Agrupa las historias en olas de desarrollo que nunca tocan los mismos archivos, para construirlas en paralelo.", "Te muestra el orden; las historias que vienen de un bug bash o de una revisión de seguridad lo indican."], when: "Después del PRD, después de sumar una funcionalidad, o para replanificar." },
      ] },
      { id: "build", label: "Construir", lead: "Convertir historias en producto que funciona", items: [
        { name: "/keelokit:build-story", text: "Una historia por vez, o una ola entera en paralelo: primero los tests, después el código, y después quienes no lo escribieron intentan romperlo.", badge: false, steps: ["Escribe el contrato de la historia: cada escenario, invariante y dimensión que puede romper.", "Un verificador escribe los tests de aceptación antes del código; fallan por el motivo correcto.", "Un builder los hace pasar sin tocar los tests.", "Un revisor lee el diff en frío y un breaker lo ataca: envíos dobles, pedidos simultáneos, datos de otro cliente.", "El verificador la recorre en la app corriendo; recién ahí entra."], when: "Una historia está lista. De a una, o varias de la misma ola a la vez." },
      ] },
      { id: "check", label: "Revisar", lead: "Encontrar lo que se escapó, y que no vuelva", items: [
        { name: "/keelokit:check-bugbash", text: "Una cacería de bugs en datos, API, integridad, UX, i18n, accesibilidad y seguridad. Cada bug que se escapó suma un check para toda su clase.", badge: true, steps: ["Mira qué es el proyecto y caza en consecuencia: modelo de datos, contratos y pantallas en un producto; experiencia de desarrollo, documentación y empaquetado en una librería o un plugin.", "Otro agente intenta refutar cada hallazgo; solo quedan los que se reproducen.", "Corrige cada uno en la causa, con un test que falla primero.", "Suma un control para toda la clase, registra el escape y convierte lo que queda en historias."], when: "Después de cada ola, y antes de un release." },
        { name: "/keelokit:check-security", text: "Seguridad y privacidad a fondo: datos personales, la ley de cada mercado, abusos de los recorridos críticos, escaneos.", badge: false, steps: ["Mapea cada dato personal: qué es, para qué, quién lo ve, cuánto tiempo, a dónde va.", "Nombra la ley de privacidad de cada mercado y qué le pide a este producto.", "Modela las amenazas de los recorridos críticos; escanea dependencias, imágenes y staging (OWASP ZAP).", "Revisa datos personales en los logs, exportación y borrado, retención y cifrado.", "Corrige con un test y un control por clase; las decisiones de privacidad y las preguntas legales te llegan a vos."], when: "Antes del primer lanzamiento a producción, y cuando un release toca datos personales, autenticación o pagos." },
        { name: "/keelokit:check-health", text: "¿Cada regla sigue respaldada por un check que funciona? Suma reglas y registra excepciones.", badge: false, steps: ["Verifica que cada regla de la casa tenga un control vivo: un test, una regla de lint, un job de CI, un hook de git.", "Revisa excepciones, contexto, invariantes, áreas críticas y el backlog.", "Suma una regla nueva con su control, o registra una excepción con fecha y tu aprobación."], when: "Cuando el CI o el tablero muestran errores del harness, o para sumar una regla." },
      ] },
      { id: "ship", label: "Publicar", lead: "Llegar a los usuarios", items: [
        { name: "/keelokit:ship-setup", text: "Staging y producción para quien nunca desplegó nada: una guía, la automatización y la prueba de cada paso.", badge: false, steps: ["Escribe una guía de despliegue con un checklist por entorno, en palabras simples.", "Hace lo que no necesita tus credenciales: apps en Fly.io, configuración, entornos de GitHub con aprobación para producción, tokens de despliegue.", "Te guía con las cuentas, los inicios de sesión, el pago y tus propias claves; nunca escribe una credencial.", "Verifica cada paso de verdad y lo muestra en el tablero."], when: "Después del esqueleto, antes del primer release, o cuando un entorno no está listo." },
        { name: "/keelokit:ship-release", text: "Una versión de tu producto que se puede nombrar, leer y a la que se puede volver.", badge: false, steps: ["Elige la próxima versión según lo que entró: cosas nuevas, arreglos, cambios que rompen.", "Escribe notas de versión que un usuario entiende, cada línea atada a su historia o hallazgo.", "Crea el tag vX.Y.Z en main, solo después de tu sí.", "Producción se despliega solo cuando una persona lo aprueba en GitHub; sigue el despliegue hasta el final."], when: "Terminó una ola y el último bug bash está limpio." },
      ] },
      { id: "harness", label: "Harness", lead: "Mantener el harness al día", items: [
        { name: "/keelokit:harness-upgrade", text: "Mantenimiento del harness, no de tu app: trae a tu proyecto las reglas y controles nuevos de Keelokit.", badge: false, steps: ["Compara la versión del harness de tu proyecto con la nueva.", "Aplica los cambios de la plantilla en una rama: reglas, doctor y guard, CI, hooks, configuraciones base.", "Nunca reescribe el código del producto: las apps, las migraciones, los tests de punta a punta y las traducciones quedan como están.", "Resuelve conflictos, corre todos los controles y te consulta por cualquier regla nueva que falle."], when: "Después de actualizar el plugin, o cuando el tablero dice que el harness quedó atrás." },
      ] },
    ] as CommandGroup[],
  },
  dash: {
    depth: '−11 m',
    badge: 'Nuevo en 0.8',
    title: 'Una página para trabajar, un reporte para compartir',
    lead: '/keelokit:project-dashboard arma una página corta desde tu repo, en tu idioma: dónde está el proyecto, el próximo paso, lo que te espera. Se mantiene en vivo y es liviana: se publica una vez y cada actualización cambia la página abierta sin volver a pasarla por el chat, así que seguir un proyecto gasta muy pocos tokens. Para otra persona, /keelokit:project-report genera el estado completo, de solo lectura, para compartir o exportar.',
    caption: 'Turnero, un proyecto de ejemplo, a mitad de la construcción',
    open: 'Ver en tamaño completo',
    darkCaption: 'Claro u oscuro, con un clic',
    parts: [
      ['voyage', 'Dónde estás y qué sigue', 'Las etapas como una línea de avance, las decisiones de ejecución que tomaste una sola vez y el único próximo paso con su comando listo para copiar.'],
      ['waiting', 'Lo que te espera', 'Aprobaciones, las decisiones que dejó un bug bash o una revisión de seguridad con la opción que recomienda, entornos a medio configurar, actualizaciones del harness. Cada una con el link a su origen y su pedido listo.'],
      ['waves', 'Cada ola, cada historia', 'Las historias bajo su ola de desarrollo, cada una con el link a su archivo en el repo: hecha, lista para construir (copiás su comando) o esperando a otra. Las olas terminadas se pliegan.'],
      ['health', 'Salud y entornos de un vistazo', 'El doctor, el último bug bash y la última revisión de seguridad con lo que corrigieron, staging y producción paso a paso, y los documentos del proyecto a un clic.'],
      ['ask', 'Copialo o mandáselo a Claude', 'Cada botón copia su pedido y llena esta caja: lo completás y lo enviás a la sesión de Claude que mira el tablero, o lo pegás en cualquier chat.'],
      ['report', 'El reporte completo, para compartir o exportar', '/keelokit:project-report muestra cada etapa con sus documentos, cada hallazgo, las decisiones y el historial. De solo lectura, como página para compartir o archivo HTML que se abre en cualquier lado.'],
    ],
  },
  keel: {
    depth: '−15 m',
    title: 'Lo que no se ve',
    lead: 'Los agentes me decían “listo” y dejaban bugs. Estas cuatro ideas son lo que salió de ir resolviendo eso, proyecto a proyecto.',
    principles: [
      ['Una regla necesita un check', 'Cada regla apunta a algo que la verifica: un test, una regla de lint, un hook de git, un job de CI. El doctor avisa cuando una regla se quedó sin su check.'],
      ['Lo que no se sabe queda como pregunta', 'Lo que nadie sabe todavía se escribe con un responsable y la pregunta exacta. No se inventan valores que suenan bien.'],
      ['El que construye no se evalúa', 'Un verificador escribe los tests de aceptación antes del código, un revisor lee el diff en frío, un breaker ataca la rama, y solo el verificador puede dar una historia por terminada.'],
      ['Los bugs vienen en clases', 'Lo que siempre tiene que cumplirse (los totales cierran, un aviso sale una sola vez, un límite aguanta dos requests a la vez) se escribe como invariante y se prueba con tests de propiedades, de concurrencia y de repetición. El código crítico pasa por mutation testing, para que sus tests puedan fallar de verdad.'],
    ],
    doctorTitle: 'El doctor, en un proyecto',
    rulesTitle: 'Algunas reglas de la casa, y qué las hace cumplir',
    rules: [
      ['SEC-1', 'Sin secretos en el repo', 'escaneo en CI · guard · pre-commit'],
      ['CFG-1', 'Cada variable de config documentada', 'un test que compara schema, archivos .env y README'],
      ['AUTHZ-1', 'Cada ruta con su decisión de acceso', 'un test que lee el router real'],
      ['I18N-1', 'Texto solo a través de traducciones', 'regla de lint · test de paridad de idiomas'],
      ['QA-4', 'Ningún test silenciado', 'guard · pre-commit'],
      ['TRACE-1', 'Cada escenario con su test', 'doctor, en CI'],
      ['INV-1', 'Cada invariante probado por un test', 'doctor, en CI'],
      ['MUT-1', 'Tests del código crítico que pueden fallar', 'mutation score en CI'],
    ],
    example: 'Salida de ejemplo',
  },
  auto: {
    depth: '−24 m',
    title: 'Lo que corre solo',
    items: [
      ['Antes de cada acción de un agente', 'Un guard frena secretos, cambios a archivos .env y a migraciones ya aplicadas, hooks salteados, tests silenciados y deploys a producción.'],
      ['Al empezar una sesión', 'Un estado corto: dónde está el proyecto y qué historias están listas.'],
      ['En cada commit y push', 'El mismo guard como hook de git, y después el chequeo local completo antes de que algo llegue al remoto.'],
      ['En CI', 'Escaneo de secretos, lint y tipos, tests unitarios y de integración contra un PostgreSQL real, recorridos de punta a punta con análisis de accesibilidad y contra la API real, mutation testing del código crítico, análisis estático y deploy a staging.'],
    ],
    guardExample: 'El guard, frenando a un agente',
  },
  honest: {
    depth: '−32 m',
    title: 'Bueno saber',
    items: [
      ['Es opinado', 'Está hecho a mi gusto y con mi stack. No va a encajar en todos los proyectos ni en todos los equipos. Si tu stack es otro, /keelokit:project-adopt igual te da las reglas y los checks.'],
      ['Usa tokens', 'build-story y check-bugbash corren varios agentes por historia. Para cambios chicos existe /keelokit:build-story --light.'],
      ['El guard es un reductor de velocidad', 'Frena a los agentes en los errores obvios, pero no es un sandbox. Los hooks de git y el CI son el respaldo real.'],
      ['El doctor ve presencia, no calidad', 'Puede ver que un check existe y está prendido, no que sea un buen check. En el código crítico eso lo mide el mutation testing; en el resto, las revisiones y las cacerías de bugs.'],
    ],
    learnedTitle: 'Ideas de las que aprendí',
    learned: 'El desarrollo guiado por especificaciones (OpenSpec, Spec Kit), Superpowers por separar quién construye de quién revisa, Copier por los templates que se pueden actualizar, y mucha prueba y error en mis propios proyectos.',
  },
  try: {
    depth: '−40 m',
    title: 'Probarlo',
    lead: 'En una carpeta vacía corré /keelokit:project-new. En un repo que ya tenés, /keelokit:project-adopt.',
    needs: 'Necesitás Node 22 con pnpm 10, Python 3.11+, uv, Docker y git. macOS o Linux.',
    github: 'Código, documentación y licencia en GitHub',
  },
  footer: {
    made: 'Keelokit es un proyecto hobby de',
    when: 'hecho los fines de semana y en noches de música y código.',
    license: 'Licencia MIT',
  },
};

export const T = { en, es };
