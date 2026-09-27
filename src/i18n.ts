export type Locale = 'en' | 'es';

export const REPO = 'https://github.com/leosimini/keelokit';
export const AUTHOR = {
  name: 'Leopoldo Simini',
  url: 'https://leopoldosimini.com',
  github: 'https://github.com/leosimini',
  linkedin: 'https://www.linkedin.com/in/leopoldosimini/',
};
export const INSTALL = [
  'claude plugin marketplace add leosimini/keelokit',
  'claude plugin install keelokit@keelokit',
];

const en = {
  lang: 'en',
  title: 'Keelokit · a personal Claude Code harness for TypeScript monorepos',
  description:
    'Keelokit is Leopoldo Simini’s personal Claude Code harness for building apps in TypeScript monorepos. Open source, a hobby project, shared in case it helps.',
  nav: { how: 'How it starts', commands: 'Commands', keel: 'The keel', try: 'Try it', switch: 'Español', switchHref: '/es' },
  hero: {
    eyebrow: 'Open source · a personal Claude Code harness',
    title: ['The keel under', 'my apps.'],
    lead:
      'The harness I use to turn ideas into first versions with coding agents: my stack, my rules, the way I like to work. I maintain it on weekends and late nights, with music on, and share it in case it helps you too.',
    github: 'View on GitHub',
    copy: 'Copy',
    copied: 'Copied',
    scroll: 'Dive in',
  },
  surface: 'What you build rides on top. What keeps it on course sits underneath.',
  how: {
    depth: '−2 m',
    title: 'From an idea to a monorepo that runs',
    lead:
      '/keelokit:kickstart walks you through five gates. It stops only where your decision matters, and writes everything down as it goes.',
    steps: [
      ['Intake', 'An interview that reads what you already have first, then asks only what’s missing. What nobody knows yet stays written as an open question, with an owner.'],
      ['Product', 'A short PRD: the problem, who it’s for, what’s in and, explicitly, what’s out.'],
      ['Stack', 'The house stack. Anything that deviates from it is recorded as a decision, not improvised.'],
      ['Skeleton', 'A generated monorepo with CI, git hooks and tests, green before you write a feature.'],
      ['Backlog', 'Epics and stories with acceptance scenarios, grouped in waves that never touch the same files.'],
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
  },
  start: {
    title: 'Where to start',
    head: ['What you have', 'Start with', 'What you get'],
    rows: [
      ['An idea, nothing else', '/keelokit:kickstart', 'A monorepo that runs, with CI, context and a first backlog'],
      ['A repo you already have', '/keelokit:adopt', 'The rules mapped to its checks, and the rest as dated debt'],
      ['A story to build', '/keelokit:build', 'Tests written first, code that passes them, a verified result'],
      ['Bugs that keep slipping through', '/keelokit:bugbash', 'Root-cause fixes, and a new check for every bug that escaped'],
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
    lead: 'Nine skills. You can run them one by one, or let /keelokit tell you what comes next.',
    items: [
      ['/keelokit:kickstart', 'From an idea to a working skeleton: intake, PRD, stack, generated monorepo with CI, first backlog.'],
      ['/keelokit:adopt', 'Adds only the harness to a repo you already have. What it doesn’t meet yet becomes a dated exception.'],
      ['/keelokit:intake', 'Reads briefs, notes or a repo, then asks only what’s missing. Never fills a gap with a guess.'],
      ['/keelokit:backlog', 'Epics and stories with acceptance scenarios, in waves so parallel work never collides.'],
      ['/keelokit:build', 'One story at a time: the verifier writes the tests first, a builder makes them pass, a reviewer reads the diff.'],
      ['/keelokit:bugbash', 'A bug hunt across data, API, UX, i18n, accessibility and security. Every escaped bug adds a check.'],
      ['/keelokit:doctor', 'Is every rule still backed by a check that works? Adds rules, registers exceptions.'],
      ['/keelokit:upgrade', 'Brings a project to a newer template without touching its product code.'],
      ['/keelokit', 'Where the project stands, what comes next, what’s waiting for your decision.'],
    ],
  },
  keel: {
    depth: '−15 m',
    title: 'The part you don’t see',
    lead: 'Agents kept telling me “done” and leaving bugs behind. These three ideas are what came out of fixing that, project after project.',
    principles: [
      ['A rule needs a check', 'Each rule points to something that verifies it: a test, a lint rule, a git hook, a CI job. The doctor tells you when a rule has lost its check.'],
      ['Unknowns stay questions', 'What nobody knows yet is written down with an owner and the exact question. Plausible defaults don’t get invented.'],
      ['The builder doesn’t grade itself', 'A verifier writes the acceptance tests before the code, a reviewer reads the diff cold, and only the verifier can call a story done.'],
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
      ['In CI', 'Secret scan, lint and types, unit and integration tests on a real PostgreSQL, end-to-end journeys with an accessibility scan, static analysis, a staging deploy.'],
    ],
    guardExample: 'The guard, stopping an agent',
  },
  honest: {
    depth: '−32 m',
    title: 'Good to know',
    items: [
      ['It’s opinionated', 'It’s built around my preferences and my stack. It won’t fit every project or every team. If your stack is different, /keelokit:adopt still gives you the rules and the checks.'],
      ['It uses tokens', 'build and bugbash run several agents per story. /keelokit:build --light exists for small changes.'],
      ['The guard is a speed bump', 'It stops agents from the obvious mistakes, but it isn’t a sandbox. Git hooks and CI are the real backstop.'],
      ['The doctor sees presence, not quality', 'It can tell a check exists and is switched on, not that it’s a good check. Reviews and bug hunts cover that.'],
    ],
    learnedTitle: 'Ideas I learned from',
    learned: 'Spec-driven development (OpenSpec, Spec Kit), Superpowers for separating who builds from who reviews, Copier for templates that can be upgraded, and a lot of trial and error on my own projects.',
  },
  try: {
    depth: '−40 m',
    title: 'Try it',
    lead: 'In an empty folder run /keelokit:kickstart. In a repo you already have, /keelokit:adopt.',
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
  title: 'Keelokit · un harness personal de Claude Code para monorepos TypeScript',
  description:
    'Keelokit es el harness personal de Claude Code de Leopoldo Simini para construir aplicaciones en monorepos TypeScript. Open source, un proyecto hobby, compartido por si le sirve a alguien.',
  nav: { how: 'Cómo arranca', commands: 'Comandos', keel: 'La quilla', try: 'Probarlo', switch: 'English', switchHref: '/' },
  hero: {
    eyebrow: 'Open source · un harness personal de Claude Code',
    title: ['La quilla debajo', 'de mis apps.'],
    lead:
      'El harness que uso para convertir ideas en primeras versiones con agentes de código: mi stack, mis reglas, mi forma de trabajar. Lo mantengo los fines de semana y en noches de música y código, y lo comparto por si te sirve a vos también.',
    github: 'Ver en GitHub',
    copy: 'Copiar',
    copied: 'Copiado',
    scroll: 'Sumergirse',
  },
  surface: 'Lo que construís va arriba. Lo que te mantiene el rumbo, abajo.',
  how: {
    depth: '−2 m',
    title: 'De una idea a un monorepo que funciona',
    lead:
      '/keelokit:kickstart te lleva por cinco etapas. Se frena solo donde importa tu decisión, y va dejando todo por escrito.',
    steps: [
      ['Intake', 'Una entrevista que primero lee lo que ya tenés y después pregunta solo lo que falta. Lo que nadie sabe todavía queda escrito como pregunta abierta, con un responsable.'],
      ['Producto', 'Un PRD corto: el problema, para quién es, qué entra y, explícitamente, qué queda afuera.'],
      ['Stack', 'El stack de la casa. Lo que se desvía queda registrado como decisión, no improvisado.'],
      ['Esqueleto', 'Un monorepo generado con CI, hooks de git y tests, en verde antes de escribir una feature.'],
      ['Backlog', 'Épicas e historias con escenarios de aceptación, agrupadas en tandas que nunca tocan los mismos archivos.'],
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
  },
  start: {
    title: 'Por dónde empezar',
    head: ['Qué tenés', 'Empezá con', 'Qué obtenés'],
    rows: [
      ['Una idea, nada más', '/keelokit:kickstart', 'Un monorepo que funciona, con CI, contexto y un primer backlog'],
      ['Un repo que ya existe', '/keelokit:adopt', 'Las reglas mapeadas a sus checks, y el resto como deuda con fecha'],
      ['Una historia para construir', '/keelokit:build', 'Tests escritos primero, código que los pasa y un resultado verificado'],
      ['Bugs que se siguen escapando', '/keelokit:bugbash', 'Arreglos en la causa raíz, y un check nuevo por cada bug que se escapó'],
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
    lead: 'Nueve skills. Podés correrlos uno por uno, o dejar que /keelokit te diga qué sigue.',
    items: [
      ['/keelokit:kickstart', 'De una idea a un esqueleto que funciona: intake, PRD, stack, monorepo generado con CI y primer backlog.'],
      ['/keelokit:adopt', 'Suma solo el harness a un repo que ya tenés. Lo que todavía no cumple queda como excepción con fecha.'],
      ['/keelokit:intake', 'Lee briefs, notas o un repo, y pregunta solo lo que falta. Nunca completa un hueco adivinando.'],
      ['/keelokit:backlog', 'Épicas e historias con escenarios de aceptación, en tandas para que el trabajo en paralelo no choque.'],
      ['/keelokit:build', 'Una historia por vez: el verificador escribe primero los tests, un builder los hace pasar, un revisor lee el diff.'],
      ['/keelokit:bugbash', 'Una cacería de bugs en datos, API, UX, i18n, accesibilidad y seguridad. Cada bug que se escapó suma un check.'],
      ['/keelokit:doctor', '¿Cada regla sigue respaldada por un check que funciona? Suma reglas y registra excepciones.'],
      ['/keelokit:upgrade', 'Lleva un proyecto a un template más nuevo sin tocar el código del producto.'],
      ['/keelokit', 'Dónde está el proyecto, qué sigue y qué espera tu decisión.'],
    ],
  },
  keel: {
    depth: '−15 m',
    title: 'Lo que no se ve',
    lead: 'Los agentes me decían “listo” y dejaban bugs. Estas tres ideas son lo que salió de ir resolviendo eso, proyecto a proyecto.',
    principles: [
      ['Una regla necesita un check', 'Cada regla apunta a algo que la verifica: un test, una regla de lint, un hook de git, un job de CI. El doctor avisa cuando una regla se quedó sin su check.'],
      ['Lo que no se sabe queda como pregunta', 'Lo que nadie sabe todavía se escribe con un responsable y la pregunta exacta. No se inventan valores que suenan bien.'],
      ['El que construye no se evalúa', 'Un verificador escribe los tests de aceptación antes del código, un revisor lee el diff en frío, y solo el verificador puede dar una historia por terminada.'],
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
      ['En CI', 'Escaneo de secretos, lint y tipos, tests unitarios y de integración contra un PostgreSQL real, recorridos de punta a punta con análisis de accesibilidad, análisis estático y deploy a staging.'],
    ],
    guardExample: 'El guard, frenando a un agente',
  },
  honest: {
    depth: '−32 m',
    title: 'Bueno saber',
    items: [
      ['Es opinado', 'Está hecho a mi gusto y con mi stack. No va a encajar en todos los proyectos ni en todos los equipos. Si tu stack es otro, /keelokit:adopt igual te da las reglas y los checks.'],
      ['Usa tokens', 'build y bugbash corren varios agentes por historia. Para cambios chicos existe /keelokit:build --light.'],
      ['El guard es un reductor de velocidad', 'Frena a los agentes en los errores obvios, pero no es un sandbox. Los hooks de git y el CI son el respaldo real.'],
      ['El doctor ve presencia, no calidad', 'Puede ver que un check existe y está prendido, no que sea un buen check. Para eso están las revisiones y las cacerías de bugs.'],
    ],
    learnedTitle: 'Ideas de las que aprendí',
    learned: 'El desarrollo guiado por especificaciones (OpenSpec, Spec Kit), Superpowers por separar quién construye de quién revisa, Copier por los templates que se pueden actualizar, y mucha prueba y error en mis propios proyectos.',
  },
  try: {
    depth: '−40 m',
    title: 'Probarlo',
    lead: 'En una carpeta vacía corré /keelokit:kickstart. En un repo que ya tenés, /keelokit:adopt.',
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
