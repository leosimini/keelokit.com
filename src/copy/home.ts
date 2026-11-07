// The copy of the home page: what each plugin does, how they fit, which one to install.
// Harbor's words stay in English in both languages. Marks: `code` and **bold** (see lib/rich.ts).
import { keelokit } from './keelokit';

export const home = {
  en: {
    title: 'Keelokit and Keelokit Harbor · two plugins for Claude Code',
    description:
      'Keelokit makes one Claude Code session work like a disciplined team. Keelokit Harbor is the meta-orchestrator of releases: it coordinates sessions that can’t see each other, in Claude Desktop, the CLI and the cloud, and lands their work on main in one convoy. By Leopoldo Simini.',
    ogAlt: 'The Keelokit icon, a hydrofoil board flying over the water, next to the name Keelokit.',
    hero: {
      eyebrow: 'Open source · two plugins for Claude Code',
      title: ['Many sessions that can’t see each other.', 'One harbor that brings them to main.'],
      lead: 'Keelokit makes one Claude Code session work like a disciplined team. Keelokit Harbor is the meta-orchestrator of releases, the powerful part for when orchestrating gets complex: sessions in Claude Desktop, in the CLI and in the cloud, across several accounts, none of which can see the others. Each one finishes its work; Harbor brings it together onto `main` as coordinated, verified releases, in order.',
      lead2: 'Both come from hundreds of hours, thousands by now, of developing many projects in parallel, with many sessions on several accounts that had to keep delivering software with almost no intervention, around the clock or unattended.',
      doors: [
        ['Start here', 'Keelokit', 'One session, done right.'],
        ['Add it to orchestrate', 'Keelokit Harbor', 'The meta-orchestrator of releases.'],
      ] as [string, string, string][],
      scene: 'A convoy of three cargo ships and small vessels sailing toward a port with a lighthouse',
      cap: 'a convoy heading for main',
    },
    plugins: {
      eyebrow: 'What each one does',
      title: 'Two plugins, two jobs.',
      lead: 'Keelokit looks after the work inside each session. Harbor looks after the work between sessions. They don’t overlap.',
      cards: [
        {
          name: 'Keelokit', tag: 'The method for every session.', start: 'Start here',
          points: [
            '**From idea to monorepo:** interview, short PRD, stack, skeleton with CI, backlog.',
            '**A team, not one agent:** a verifier writes the tests, a builder makes them pass, a reviewer reads cold, a breaker attacks.',
            '**Every rule has a check,** and a doctor tells you when one is lost.',
            '**Lands one story on `main`** after a local verify, and stops where a person is needed.',
          ],
          go: 'Keelokit, in plain words', tech: 'How it’s built',
        },
        {
          name: 'Keelokit Harbor', tag: 'The meta-orchestrator of releases.',
          points: [
            '**Convoys:** many branches are merged into one, verified once and pushed once.',
            '**A logbook** on a git branch that every session, account and machine reads with `git fetch`.',
            '**Seals:** a branch enters a convoy only with a verify result for its exact commit.',
            '**One harbormaster at a time,** and a cap on sessions per account.',
          ],
          go: 'Keelokit Harbor, in plain words', tech: 'How it works',
        },
      ],
      dep: ['Harbor is built on Keelokit.', 'It runs Keelokit’s verify, reads its state and uses its tiers. Keelokit decides what a story has to prove; Harbor decides when proven stories reach `main`. Without Keelokit in the project, Harbor does nothing.'],
    },
    voyages: {
      eyebrow: 'Three ways work reaches main',
      title: 'Sailboat, cargo ship, convoy.',
      items: [
        { who: 'Keelokit alone', title: 'The sailboat: one small story', text: 'A session builds a story, Keelokit verifies it locally, and it lands on `main` by itself. One verify per landing. This is Keelokit’s default.', how: '`build-story` · trivial or light tier · `landing policy = direct`', label: 'A small sailboat' },
        { who: 'Keelokit alone · heavier checks', title: 'The cargo ship: a big branch', text: 'Many files, or a critical area like money or permissions. Same road, full process: more agents, the full verify. Alone, it still docks by itself. Harbor doesn’t measure size; it records the tier.', how: '`build-story` · full tier or a critical area', label: 'A cargo ship loaded with containers' },
        { who: 'Keelokit + Harbor', title: 'The convoy: several vessels, one arrival', text: 'Each session finishes on its own branch with a seal. They sail together, are verified once as a whole, and reach `main` in one push. Small and big vessels go in the same convoy.', how: '`convoy/<n>` · one verify · one push', label: 'A convoy: three cargo ships and small vessels sailing together' },
      ],
    },
    guide: {
      eyebrow: 'When to install which',
      title: 'Start with Keelokit. Add Harbor when this starts to hurt.',
      lead: 'What decides it is how complex your orchestration is, not how big the project is or how many sessions you run. The signal for Harbor is sessions in Claude Desktop, the CLI and the cloud, on several accounts, that can’t see each other and have to be coordinated, or a whole team developing in the same repo, with work that has to reach `main` as releases that land together and in order.',
      rows: [
        ['k', 'Sessions that don’t depend on each other’s work, on one account and one machine.', 'Keelokit alone', 'direct landing'],
        ['k', 'First time with agents, or building a first MVP.', 'Keelokit alone', 'direct landing'],
        ['h', 'Several development CLIs and sessions to coordinate, local and in the cloud, that can’t see each other.', 'Add Harbor', 'one logbook, one convoy'],
        ['h', 'Work that has to reach `main` as releases: together, verified once and in order.', 'Add Harbor', 'convoys and the harbormaster’s ok'],
        ['h', 'A whole team developing in the same repo.', 'Add Harbor', 'one logbook everyone reads'],
        ['h', 'More than one Claude account, or more than one machine, the cloud included.', 'Add Harbor', 'shared logbook'],
        ['h', 'Each landing costs a full verify, and every push to `main` starts a CI run you pay for.', 'Add Harbor', 'one verify and one push per convoy'],
        ['h', 'Several branches keep touching the same files: schema, migrations, shared types, locales.', 'Add Harbor', 'hotspots, one at a time'],
      ] as [string, string, string, string][],
      vignettes: [
        ['k', 'Solo, one MVP', 'One laptop, one story at a time, a Claude plan. Keelokit lands each story as it’s proven. Nothing to coordinate.'],
        ['k', 'A couple of stories a day, a helper now and then', 'A small team where two sessions sometimes run in parallel. Keelokit’s own `coordinate` skill is enough: the sessions don’t collide.'],
        ['h', 'Desktop, CLI and cloud, across two accounts', 'Two Claude accounts, Claude Desktop on a laptop, the CLI and a cloud container. None of the sessions can see the others. Each one ends on its own branch; nobody sees the combination until a convoy is assembled and verified once.'],
        ['h', 'A migrations folder everyone touches', 'Several branches add migrations in the same week and CI minutes are counting. Harbor keeps them out of the same open convoy and pushes once.'],
      ] as [string, string, string][],
      truth: 'Harbor builds on Keelokit, so you start there and add Harbor when orchestrating the releases gets complex.',
    },
    together: {
      eyebrow: 'How they work together',
      title: 'Keelokit proves each vessel. Harbor decides when the convoy sails.',
      body: [
        'The sessions can’t see each other, so Harbor gives them one thing they all read: a logbook on a git branch. Each session fetches it when it starts, at each prompt and before a push to `main`, so none of them decides on stale state.',
        'Each session finishes on its own branch with Keelokit’s verify and a seal. Harbor gathers them in a convoy, a skipper assembles it, the harbormaster, one at a time and on watch, gives the ok, and the convoy is verified once and reaches `main` in one push. Writing the logbook never moves `main` or starts its CI.',
      ],
      scene: 'The port with a lighthouse, a crane and container stacks, and a cargo ship approaching',
      cap: 'the port is main',
      roles: [
        ['lighthouse', 'harbormaster', 'The harbor master', 'One session keeps the **watch**: gives the ok to sail, renews a heartbeat. If it lapses, any session can take over; the first commit wins.', 'A lighthouse'],
        ['wheel', 'skipper', 'The skipper', 'The session that carries **one convoy**: merges `main` and the vessels into `convoy/<n>` and fixes the combination.', 'A ship’s wheel'],
        ['vessels', 'vessel', 'A vessel', 'One session’s **branch**, built with `build-story`. Big or small, it enters with its exact commit.', 'A tug and a sailboat'],
        ['logbook', 'logbook', 'The logbook', 'The branch `harbor/log`: TOML files only Harbor writes, and pages generated from them. Everyone reads it with `git fetch`.', 'A logbook'],
        ['seal', 'seal', 'The seal', 'A verify result for **one exact commit**. Add a commit and the seal no longer applies: the delivery is void until it is verified again.', 'A wax seal'],
        ['channel', 'hotspot', 'The narrow channel', 'Paths you declare as shared (schema, migrations, locales). Two branches touching the same one are never in open convoys together.', 'A narrow channel between two quays'],
        ['crew', 'account · cap', 'The crew', 'Each Claude account has a **cap on active sessions** and a pause. At the limit, sessions hand over what they pushed, with hashes.', 'Two crew members on deck and a third place left empty'],
        ['approve', 'convoy approve', 'The owner’s yes', 'A convoy with a full-tier story or a critical area also waits for **your yes**, typed in your own terminal and tied to that commit.', 'A signature with a check mark'],
      ] as [string, string, string, string, string][],
      mapnote: 'Every image maps to one mechanism in Harbor’s code. The full table, and where each image can mislead, is on the technical page.',
      mapLink: 'The pictures, and what they stand for',
    },
    why: {
      title: keelokit.en.note.title,
      body: [
        keelokit.en.note.body[0],
        `${keelokit.en.note.body[1]} Harbor is what came out of landing all those sessions onto \`main\`, one level up from Keelokit.`,
      ],
      sign: keelokit.en.note.sign,
    },
    try: {
      eyebrow: 'Try it',
      title: 'Install Keelokit. Load Harbor when you need it.',
      k: {
        name: 'Keelokit', text: 'Then run `/keelokit:project-new` in an empty folder, or `/keelokit:project-adopt` in a repo you have. You need Node 22 with pnpm 10, Python 3.11+, uv, Docker and git, on macOS or Linux.',
        download: 'Download the latest version', github: 'Code and license on GitHub',
      },
      h: {
        name: 'Keelokit Harbor',
        text: 'Then `/harbor:adopt` in a Keelokit project (0.12.0 or later). Needs Python 3.11+, git and a remote `origin`.',
        zip: 'Or download harbor-plugin.zip: in Claude, Customize → Plugins → Upload.',
        download: 'Download the latest version', github: 'Code and license on GitHub',
      },
    },
  },
  es: {
    title: 'Keelokit y Keelokit Harbor · dos plugins para Claude Code',
    description:
      'Keelokit hace que una sesión de Claude Code trabaje como un equipo ordenado. Keelokit Harbor es el meta-orquestador de releases: coordina sesiones que no se ven entre sí, en Claude Desktop, la CLI y la nube, y sube su trabajo a main en un solo convoy. Por Leopoldo Simini.',
    ogAlt: 'El ícono de Keelokit, una tabla con hidrofoil volando sobre el agua, junto al nombre Keelokit.',
    hero: {
      eyebrow: 'Open source · dos plugins para Claude Code',
      title: ['Muchas sesiones que no se ven entre sí.', 'Un puerto que las lleva a main.'],
      lead: 'Keelokit hace que una sesión de Claude Code trabaje como un equipo ordenado. Keelokit Harbor es el meta-orquestador de releases, la parte potente para cuando orquestar se complica: sesiones de Claude Desktop, de la CLI y de la nube, en varias cuentas, que no se ven entre sí. Cada una termina su trabajo; Harbor lo junta en `main` como releases coordinados y verificados, en orden.',
      lead2: 'Los dos salen de cientos de horas, a esta altura miles, desarrollando muchos proyectos en paralelo, con muchas sesiones en varias cuentas que tenían que seguir entregando software con casi nada de intervención, de día y de noche o sin supervisión.',
      doors: [
        ['Empezá acá', 'Keelokit', 'Una sesión, bien hecha.'],
        ['Sumalo para orquestar', 'Keelokit Harbor', 'El meta-orquestador de releases.'],
      ],
      scene: 'Un convoy de tres buques de carga y embarcaciones chicas navegando hacia un puerto con un faro',
      cap: 'un convoy rumbo a main',
    },
    plugins: {
      eyebrow: 'Qué hace cada uno',
      title: 'Dos plugins, dos trabajos.',
      lead: 'Keelokit cuida el trabajo dentro de cada sesión. Harbor cuida el trabajo entre sesiones. No se pisan.',
      cards: [
        {
          name: 'Keelokit', tag: 'El método de cada sesión.', start: 'Empezá acá',
          points: [
            '**De la idea al monorepo:** entrevista, PRD corto, stack, esqueleto con CI, backlog.',
            '**Un equipo, no un agente:** un verificador escribe los tests, un constructor los hace pasar, un revisor lee en frío, un breaker ataca.',
            '**Cada regla tiene un check,** y un doctor avisa cuando se pierde uno.',
            '**Sube una historia a `main`** después de un verify local, y se detiene donde hace falta una persona.',
          ],
          go: 'Keelokit, en palabras simples', tech: 'Cómo está hecho',
        },
        {
          name: 'Keelokit Harbor', tag: 'El meta-orquestador de releases.',
          points: [
            '**Convoys:** muchas ramas se mergean en una, se verifican una vez y se suben una vez.',
            '**Un logbook** en una rama de git que cada sesión, cuenta y máquina lee con `git fetch`.',
            '**Seals:** una rama entra a un convoy solo con un resultado de verify para su commit exacto.',
            '**Un harbormaster a la vez,** y un tope de sesiones por cuenta.',
          ],
          go: 'Keelokit Harbor, en palabras simples', tech: 'Cómo funciona',
        },
      ],
      dep: ['Harbor se apoya en Keelokit.', 'Corre el verify de Keelokit, lee su estado y usa sus niveles. Keelokit decide qué tiene que probar una historia; Harbor decide cuándo llegan a `main` las historias ya probadas. Sin Keelokit en el proyecto, Harbor no hace nada.'],
    },
    voyages: {
      eyebrow: 'Tres formas de llegar a main',
      title: 'Velero, buque de carga, convoy.',
      items: [
        { who: 'Solo Keelokit', title: 'El velero: una historia chica', text: 'Una sesión construye una historia, Keelokit la verifica en local y sube sola a `main`. Un verify por subida. Es lo normal en Keelokit.', how: '`build-story` · nivel trivial o light · `landing policy = direct`', label: 'Un velero chico' },
        { who: 'Solo Keelokit · controles más pesados', title: 'El buque de carga: una rama grande', text: 'Muchos archivos, o un área crítica como plata o permisos. El mismo camino con el proceso completo: más agentes, el verify entero. Solo, también atraca por su cuenta. Harbor no mide el tamaño; registra el nivel.', how: '`build-story` · nivel full o un área crítica', label: 'Un buque de carga lleno de contenedores' },
        { who: 'Keelokit + Harbor', title: 'El convoy: varios vessels, una llegada', text: 'Cada sesión termina en su rama con un seal. Navegan juntos, se verifican una vez como conjunto y llegan a `main` en un solo push. En el mismo convoy van vessels chicos y grandes.', how: '`convoy/<n>` · un verify · un push', label: 'Un convoy: tres buques de carga y embarcaciones chicas navegando juntos' },
      ],
    },
    guide: {
      eyebrow: 'Cuál instalar',
      title: 'Empezá con Keelokit. Sumá Harbor cuando esto empiece a doler.',
      lead: 'Lo que decide es qué tan compleja es tu orquestación, no qué tan grande es el proyecto ni cuántas sesiones corrés. La señal para Harbor es tener sesiones de Claude Desktop, de la CLI y de la nube, en varias cuentas, que no se ven entre sí y hay que coordinar, o un equipo entero desarrollando en el mismo repo, con trabajo que tiene que llegar a `main` como releases que aterrizan juntos y en orden.',
      rows: [
        ['k', 'Sesiones que no dependen del trabajo de las otras, en una cuenta y una máquina.', 'Solo Keelokit', 'subida directa'],
        ['k', 'Primera vez con agentes, o armando un primer MVP.', 'Solo Keelokit', 'subida directa'],
        ['h', 'Varias CLI de desarrollo y sesiones para coordinar, locales y en la nube, que no se ven entre sí.', 'Sumá Harbor', 'un logbook, un convoy'],
        ['h', 'Trabajo que tiene que llegar a `main` como releases: juntos, verificados una vez y en orden.', 'Sumá Harbor', 'convoys y el ok del harbormaster'],
        ['h', 'Un equipo entero desarrollando en el mismo repo.', 'Sumá Harbor', 'un logbook que lee todo el equipo'],
        ['h', 'Más de una cuenta de Claude, o más de una máquina, la nube incluida.', 'Sumá Harbor', 'logbook compartido'],
        ['h', 'Cada subida cuesta un verify completo, y cada push a `main` dispara una corrida de CI que pagás.', 'Sumá Harbor', 'un verify y un push por convoy'],
        ['h', 'Varias ramas tocan siempre lo mismo: schema, migraciones, tipos compartidos, textos.', 'Sumá Harbor', 'hotspots, de a uno'],
      ],
      vignettes: [
        ['k', 'Solo, un MVP', 'Una notebook, una historia por vez, un plan de Claude. Keelokit sube cada historia cuando está probada. Nada que coordinar.'],
        ['k', 'Un par de historias por día, algún ayudante', 'Un equipo chico donde a veces corren dos sesiones en paralelo. Alcanza con la skill `coordinate` de Keelokit: las sesiones no se pisan.'],
        ['h', 'Desktop, CLI y nube, en dos cuentas', 'Dos cuentas de Claude, Claude Desktop en una notebook, la CLI y un contenedor en la nube. Ninguna sesión ve a las otras. Cada una termina en su rama; nadie ve la combinación hasta que se ensambla un convoy y se verifica una vez.'],
        ['h', 'Una carpeta de migraciones que toca todo el mundo', 'Varias ramas agregan migraciones en la misma semana y los minutos de CI corren. Harbor las mantiene fuera del mismo convoy abierto y sube una sola vez.'],
      ],
      truth: 'Harbor se apoya en Keelokit, así que empezás por ahí y sumás Harbor cuando orquestar los releases se complica.',
    },
    together: {
      eyebrow: 'Cómo trabajan juntos',
      title: 'Keelokit prueba cada vessel. Harbor decide cuándo zarpa el convoy.',
      body: [
        'Las sesiones no se ven entre sí, así que Harbor les da algo que todas leen: un logbook en una rama de git. Cada sesión lo trae al arrancar, en cada prompt y antes de un push a `main`, para que ninguna decida con un estado viejo.',
        'Cada sesión termina en su propia rama con el verify de Keelokit y un seal. Harbor las reúne en un convoy, un skipper lo ensambla, el harbormaster, uno a la vez y en su guardia, da el ok, y el convoy se verifica una vez y llega a `main` en un solo push. Escribir el logbook nunca mueve `main` ni dispara su CI.',
      ],
      scene: 'El puerto con un faro, una grúa y pilas de contenedores, y un buque de carga acercándose',
      cap: 'el puerto es main',
      roles: [
        ['lighthouse', 'harbormaster', 'El capitán de puerto', 'Una sesión lleva la **guardia**: da el ok para zarpar y renueva un heartbeat. Si vence, cualquier sesión puede tomarla; gana el primer commit.', 'Un faro'],
        ['wheel', 'skipper', 'El patrón del convoy', 'La sesión que lleva **un convoy**: mergea `main` y los vessels en `convoy/<n>` y arregla la combinación.', 'Un timón de barco'],
        ['vessels', 'vessel', 'Una embarcación', 'La **rama** de una sesión, hecha con `build-story`. Grande o chica, entra con su commit exacto.', 'Un remolcador y un velero'],
        ['logbook', 'logbook', 'El cuaderno de bitácora', 'La rama `harbor/log`: archivos TOML que solo escribe Harbor, y páginas generadas a partir de ellos. Todos lo leen con `git fetch`.', 'Un cuaderno de bitácora'],
        ['seal', 'seal', 'El precinto', 'Un resultado de verify de **un commit exacto**. Si sumás un commit, el seal ya no vale: la entrega queda anulada hasta verificar de nuevo.', 'Un sello de lacre'],
        ['channel', 'hotspot', 'El canal angosto', 'Rutas que declarás compartidas (schema, migraciones, textos). Dos ramas que tocan la misma nunca están juntas en convoys abiertos.', 'Un canal angosto entre dos muelles'],
        ['crew', 'cuenta · tope', 'La tripulación', 'Cada cuenta de Claude tiene un **tope de sesiones activas** y una pausa. Al llegar al límite, las sesiones traspasan lo que empujaron, con hashes.', 'Dos tripulantes en cubierta y un tercer lugar vacío'],
        ['approve', 'convoy approve', 'El sí del armador', 'Un convoy con una historia de nivel full o un área crítica espera además **tu sí**, escrito en tu propia terminal y atado a ese commit.', 'Una firma con una tilde'],
      ],
      mapnote: 'Cada imagen corresponde a un mecanismo del código de Harbor. La tabla completa, y dónde puede confundir cada imagen, está en la página técnica.',
      mapLink: 'Las imágenes, y qué representan',
    },
    why: {
      title: keelokit.es.note.title,
      body: [
        keelokit.es.note.body[0],
        `${keelokit.es.note.body[1]} Harbor es lo que salió de subir todas esas sesiones a \`main\`, un nivel más arriba que Keelokit.`,
      ],
      sign: keelokit.es.note.sign,
    },
    try: {
      eyebrow: 'Probalos',
      title: 'Instalá Keelokit. Cargá Harbor cuando lo necesites.',
      k: {
        name: 'Keelokit', text: 'Después corré `/keelokit:project-new` en una carpeta vacía, o `/keelokit:project-adopt` en un repo que ya tenés. Necesitás Node 22 con pnpm 10, Python 3.11+, uv, Docker y git, en macOS o Linux.',
        download: 'Descargá la última versión', github: 'Código y licencia en GitHub',
      },
      h: {
        name: 'Keelokit Harbor',
        text: 'Después `/harbor:adopt` en un proyecto con Keelokit (0.12.0 o posterior). Necesita Python 3.11+, git y un remoto `origin`.',
        zip: 'O descargá harbor-plugin.zip: en Claude, Customize → Plugins → Upload.',
        download: 'Descargá la última versión', github: 'Código y licencia en GitHub',
      },
    },
  },
};
