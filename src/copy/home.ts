// The copy of the home page: what each plugin does, how they fit, which one to install.
// Harbor's words stay in English in both languages. Marks: `code` and **bold** (see lib/rich.ts).
import { keelokit } from './keelokit';

export const home = {
  en: {
    title: 'Keelokit and Keelokit Harbor · two plugins for Claude Code',
    description:
      'Keelokit makes one Claude Code session work like a disciplined team. Keelokit Harbor lands the work of many parallel sessions on main in one convoy. Which one to install, by signals. By Leopoldo Simini.',
    ogAlt: 'The Keelokit icon, a hydrofoil board flying over the water, next to the name Keelokit.',
    hero: {
      eyebrow: 'Open source · two plugins for Claude Code',
      title: ['The keel under my apps.', 'And a harbor for the fleet.'],
      lead: 'Keelokit makes one Claude Code session work like a disciplined team: it writes things down, tests, reviews itself and ships nothing without your OK. Keelokit Harbor is for when you run many sessions at once: it gets their work onto `main` together, in order.',
      lead2: 'Keelokit is the method I use on my own projects, and it is released. Harbor came out of doing its job by hand on a real monorepo; as a plugin it is at 0.1.0, not released, and has never run on a real project.',
      doors: [
        ['Start here', 'Keelokit', 'One session, done right.'],
        ['Add it when sessions pile up', 'Keelokit Harbor', 'Many sessions, one landing.'],
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
          name: 'Keelokit Harbor', tag: 'The coordination between sessions.',
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
      lead: 'What decides it is how you work, not how big the project is. The signal for Harbor is developing with many sessions at once, local and in the cloud, and having to coordinate several development CLIs, or a whole team developing in the same repo.',
      rows: [
        ['k', 'A session at a time, or a couple that rarely overlap, on one account and one machine.', 'Keelokit alone', 'direct landing'],
        ['k', 'First time with agents, or building a first MVP.', 'Keelokit alone', 'direct landing'],
        ['h', 'Many sessions at once, local and in the cloud, and you have to coordinate several development CLIs.', 'Add Harbor', 'one convoy for all of them'],
        ['h', 'A whole team developing in the same repo.', 'Add Harbor', 'one logbook everyone reads'],
        ['h', 'More than one Claude account, or more than one machine, the cloud included.', 'Add Harbor', 'shared logbook'],
        ['h', 'Each landing costs a full verify, and every push to `main` starts a CI run you pay for.', 'Add Harbor', 'one verify and one push per convoy'],
        ['h', 'Several branches keep touching the same files: schema, migrations, shared types, locales.', 'Add Harbor', 'hotspots, one at a time'],
      ] as [string, string, string, string][],
      vignettes: [
        ['k', 'Solo, one MVP', 'One laptop, one story at a time, a Claude plan. Keelokit lands each story as it’s proven. Nothing to coordinate.'],
        ['k', 'A couple of stories a day, a helper now and then', 'A small team where two sessions sometimes run in parallel. Keelokit’s own `coordinate` skill is enough: the sessions don’t collide.'],
        ['h', 'Many sessions across two accounts', 'Two Claude accounts, a laptop and a cloud container. Each session ends on its own branch; nobody sees the combination until a convoy is assembled and verified once.'],
        ['h', 'A migrations folder everyone touches', 'Several branches add migrations in the same week and CI minutes are counting. Harbor keeps them out of the same open convoy and pushes once.'],
      ] as [string, string, string][],
      truth: 'Harbor has not run on a real project yet. If you try it today, you are the first. Keelokit alone is the tested choice.',
    },
    together: {
      eyebrow: 'How they work together',
      title: 'Keelokit proves each vessel. Harbor decides when the convoy sails.',
      body: [
        'With Harbor adopted, Keelokit’s `build-story` stops at its own branch and reports the exact commit and its verify result. Harbor takes it from there: a seal for that commit, a place in a convoy, one verify of the whole, the harbormaster’s ok, one push to `main`.',
        'The state of all this lives in a logbook on a git branch that is never `main`, so writing it doesn’t move `main` or start its CI.',
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
        `${keelokit.en.note.body[1]} Harbor came out of the same itch, one level up: after a week of landing many sessions by hand on a real monorepo, I wrote down what I was doing and made a plugin of it.`,
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
        name: 'Keelokit Harbor', badge: 'not released',
        text: 'Loads from a clone, then `/harbor:adopt` in a Keelokit project (0.12.0 or later). Tested against stand-ins for Keelokit’s verify, not yet on a real project.',
        github: 'Code and license on GitHub',
      },
    },
  },
  es: {
    title: 'Keelokit y Keelokit Harbor · dos plugins para Claude Code',
    description:
      'Keelokit hace que una sesión de Claude Code trabaje como un equipo ordenado. Keelokit Harbor sube a main el trabajo de muchas sesiones en paralelo en un solo convoy. Cuál instalar, según señales. Por Leopoldo Simini.',
    ogAlt: 'El ícono de Keelokit, una tabla con hidrofoil volando sobre el agua, junto al nombre Keelokit.',
    hero: {
      eyebrow: 'Open source · dos plugins para Claude Code',
      title: ['La quilla debajo de mis apps.', 'Y un puerto para la flota.'],
      lead: 'Keelokit hace que una sesión de Claude Code trabaje como un equipo ordenado: documenta, prueba, se revisa a sí mismo y no publica nada sin tu OK. Keelokit Harbor es para cuando corrés muchas sesiones a la vez: lleva su trabajo a `main` junto y en orden.',
      lead2: 'Keelokit es el método que uso en mis propios proyectos, y está publicado. Harbor salió de hacer su trabajo a mano en un monorepo real; como plugin está en 0.1.0, sin publicar, y nunca corrió en un proyecto real.',
      doors: [
        ['Empezá acá', 'Keelokit', 'Una sesión, bien hecha.'],
        ['Sumalo cuando se acumulen sesiones', 'Keelokit Harbor', 'Muchas sesiones, una subida.'],
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
          name: 'Keelokit Harbor', tag: 'La coordinación entre sesiones.',
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
      lead: 'Lo que decide es cómo trabajás, no qué tan grande es el proyecto. La señal para Harbor es desarrollar con muchas sesiones a la vez, locales y en la nube, y tener que coordinar varias CLI de desarrollo, o un equipo entero desarrollando en el mismo repo.',
      rows: [
        ['k', 'Una sesión por vez, o un par que casi no se cruzan, en una cuenta y una máquina.', 'Solo Keelokit', 'subida directa'],
        ['k', 'Primera vez con agentes, o armando un primer MVP.', 'Solo Keelokit', 'subida directa'],
        ['h', 'Muchas sesiones a la vez, locales y en la nube, y tenés que coordinar varias CLI de desarrollo.', 'Sumá Harbor', 'un convoy para todas'],
        ['h', 'Un equipo entero desarrollando en el mismo repo.', 'Sumá Harbor', 'un logbook que lee todo el equipo'],
        ['h', 'Más de una cuenta de Claude, o más de una máquina, la nube incluida.', 'Sumá Harbor', 'logbook compartido'],
        ['h', 'Cada subida cuesta un verify completo, y cada push a `main` dispara una corrida de CI que pagás.', 'Sumá Harbor', 'un verify y un push por convoy'],
        ['h', 'Varias ramas tocan siempre lo mismo: schema, migraciones, tipos compartidos, textos.', 'Sumá Harbor', 'hotspots, de a uno'],
      ],
      vignettes: [
        ['k', 'Solo, un MVP', 'Una notebook, una historia por vez, un plan de Claude. Keelokit sube cada historia cuando está probada. Nada que coordinar.'],
        ['k', 'Un par de historias por día, algún ayudante', 'Un equipo chico donde a veces corren dos sesiones en paralelo. Alcanza con la skill `coordinate` de Keelokit: las sesiones no se pisan.'],
        ['h', 'Muchas sesiones en dos cuentas', 'Dos cuentas de Claude, una notebook y un contenedor en la nube. Cada sesión termina en su rama; nadie ve la combinación hasta que se ensambla un convoy y se verifica una vez.'],
        ['h', 'Una carpeta de migraciones que toca todo el mundo', 'Varias ramas agregan migraciones en la misma semana y los minutos de CI corren. Harbor las mantiene fuera del mismo convoy abierto y sube una sola vez.'],
      ],
      truth: 'Harbor todavía no corrió en un proyecto real. Si lo probás hoy, sos el primero. Solo Keelokit es la opción probada.',
    },
    together: {
      eyebrow: 'Cómo trabajan juntos',
      title: 'Keelokit prueba cada vessel. Harbor decide cuándo zarpa el convoy.',
      body: [
        'Con Harbor adoptado, el `build-story` de Keelokit se detiene en su propia rama e informa el commit exacto y su resultado de verify. Desde ahí sigue Harbor: un seal para ese commit, un lugar en un convoy, un verify del conjunto, el ok del harbormaster, un push a `main`.',
        'El estado de todo esto vive en un logbook, en una rama de git que nunca es `main`, así que escribirlo no mueve `main` ni dispara su CI.',
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
        `${keelokit.es.note.body[1]} Harbor salió de la misma picazón, un nivel más arriba: después de una semana subiendo muchas sesiones a mano en un monorepo real, anoté lo que hacía y lo convertí en un plugin.`,
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
        name: 'Keelokit Harbor', badge: 'sin publicar',
        text: 'Se carga desde un clon, y después `/harbor:adopt` en un proyecto con Keelokit (0.12.0 o posterior). Probado contra sustitutos del verify de Keelokit, todavía no en un proyecto real.',
        github: 'Código y licencia en GitHub',
      },
    },
  },
};
