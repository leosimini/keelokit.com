// What every page shares: the locale, the two projects' identities, the header and footer text, and
// the way a path becomes a localized one. Each page's own copy lives next to it in this folder.
export type Locale = 'en' | 'es';

export const SITE = 'https://keelokit.com';
export const REPO = 'https://github.com/leosimini/keelokit';
export const HARBOR_REPO = 'https://github.com/leosimini/keelokit-harbor';
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
export const HARBOR_INSTALL = ['claude --plugin-dir /path/to/keelokit-harbor'];
export const HARBOR_INSTALL_ES = ['claude --plugin-dir /ruta/a/keelokit-harbor'];
// Harbor has no release: the badge is a fact written by hand, not read from anywhere.
export const HARBOR_VERSION = '0.1.0';

export type Page = 'home' | 'keelokit' | 'technical' | 'harbor' | 'harborTech';
// The English path of each page; Spanish is the same under /es.
export const PATHS: Record<Page, string> = {
  home: '/',
  keelokit: '/keelokit',
  technical: '/keelokit/technical',
  harbor: '/harbor',
  harborTech: '/harbor/how-it-works',
};
export const href = (locale: Locale, path: string) =>
  locale === 'en' ? path : path === '/' ? '/es' : `/es${path}`;

const en = {
  lang: 'en',
  skip: 'Skip to content',
  nav: {
    keelokit: 'Keelokit', harbor: 'Harbor', which: 'Which one?', install: 'Install',
    switch: 'Español', main: 'Main', menu: 'Menu', close: 'Close the menu', sections: 'Sections', top: 'Back to top',
    // The menu lists the site like a dive: the plain pages near the surface, the technical ones at the bottom.
    dive: [
      ['home', '0 m', 'Which one do I need?'],
      ['keelokit', '−2 m', 'Keelokit'],
      ['harbor', '−2 m', 'Harbor'],
      ['technical', '−20 m', 'Keelokit, how it is built'],
      ['harborTech', '−20 m', 'Harbor, how it works'],
    ] as [Page | 'which', string, string][],
  },
  badges: { released: 'released', notReleased: 'not released' },
  copy: 'Copy',
  copied: 'Copied',
  release: { label: 'Latest release', notes: 'What’s new', zip: 'Download .zip' },
  footer: {
    made: 'Keelokit is a hobby project by',
    when: 'built on weekends and late nights, with music on.',
    license: 'MIT license',
    harborLicense: 'Harbor’s license',
  },
};

const es: typeof en = {
  lang: 'es',
  skip: 'Ir al contenido',
  nav: {
    keelokit: 'Keelokit', harbor: 'Harbor', which: '¿Cuál?', install: 'Instalar',
    switch: 'English', main: 'Principal', menu: 'Menú', close: 'Cerrar el menú', sections: 'Secciones', top: 'Volver arriba',
    dive: [
      ['home', '0 m', '¿Cuál necesito?'],
      ['keelokit', '−2 m', 'Keelokit'],
      ['harbor', '−2 m', 'Harbor'],
      ['technical', '−20 m', 'Keelokit, cómo está hecho'],
      ['harborTech', '−20 m', 'Harbor, cómo funciona'],
    ],
  },
  badges: { released: 'publicado', notReleased: 'sin publicar' },
  copy: 'Copiar',
  copied: 'Copiado',
  release: { label: 'Última versión', notes: 'Novedades', zip: 'Descargar .zip' },
  footer: {
    made: 'Keelokit es un proyecto hobby de',
    when: 'hecho los fines de semana y en noches de música y código.',
    license: 'Licencia MIT',
    harborLicense: 'Licencia de Harbor',
  },
};

export const C = { en, es };
