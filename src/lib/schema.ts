// JSON-LD for each page. The author's canonical identity lives on his own site; these only point to it.
import { AUTHOR, HARBOR_REPO, REPO, type Locale } from '../copy/common';

const ctx = 'https://schema.org';
const person = {
  '@context': ctx,
  '@type': 'Person',
  '@id': `${AUTHOR.url}/#person`,
  name: AUTHOR.name,
  alternateName: ['Leo Simini', AUTHOR.handle],
  url: AUTHOR.url,
  sameAs: AUTHOR.sameAs,
};

export const keelokitLd = (o: { url: string; description: string; locale: Locale }) => ({
  '@context': ctx,
  '@type': 'SoftwareSourceCode',
  '@id': REPO,
  name: 'Keelokit',
  description: o.description,
  url: o.url,
  sameAs: [`${AUTHOR.url}/keelokit`],
  codeRepository: REPO,
  programmingLanguage: ['TypeScript', 'Python'],
  runtimePlatform: 'Claude Code',
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: o.locale,
  author: { '@id': `${AUTHOR.url}/#person` },
});

// Harbor is its own source-code entry, part of Keelokit. It has no release: the version is 0.1.0 and
// the page says it is not released.
export const harborLd = (o: { url: string; description: string; locale: Locale }) => ({
  '@context': ctx,
  '@type': 'SoftwareSourceCode',
  '@id': HARBOR_REPO,
  name: 'Keelokit Harbor',
  description: o.description,
  url: o.url,
  codeRepository: HARBOR_REPO,
  programmingLanguage: 'Python',
  runtimePlatform: 'Claude Code',
  version: '0.1.0',
  license: 'https://opensource.org/licenses/MIT',
  inLanguage: o.locale,
  isPartOf: { '@id': REPO },
  author: { '@id': `${AUTHOR.url}/#person` },
});

export const site = (o: { url: string; name: string; description: string; locale: Locale }) => ({
  '@context': ctx,
  '@type': 'WebSite',
  name: o.name,
  url: o.url,
  description: o.description,
  inLanguage: o.locale,
  author: { '@id': `${AUTHOR.url}/#person` },
});

export const techArticle = (o: { url: string; headline: string; description: string; locale: Locale; about: string }) => ({
  '@context': ctx,
  '@type': 'TechArticle',
  headline: o.headline,
  description: o.description,
  url: o.url,
  inLanguage: o.locale,
  about: { '@id': o.about },
  author: { '@id': `${AUTHOR.url}/#person` },
});

export const graph = (...items: object[]) => [...items, person];
