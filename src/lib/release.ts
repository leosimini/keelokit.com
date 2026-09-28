// The latest Keelokit release. It comes from the `release` branch, the one the Claude plugin
// directory tracks: the version in plugin.json and its dated CHANGELOG entry. The page reads it at
// build time and again in the browser, so a new release shows up without redeploying the site.
export const RELEASE_RAW = 'https://raw.githubusercontent.com/leosimini/keelokit/release';

export type Release = { version: string; date: string | null };

export function parseRelease(pluginJson: string, changelog: string): Release | null {
  const version = String(JSON.parse(pluginJson).version ?? '');
  if (!/^\d+\.\d+\.\d+$/.test(version)) return null;
  const esc = version.replace(/\./g, '\\.');
  const date = changelog.match(new RegExp(`^## ${esc} — (\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1] ?? null;
  return { version, date };
}

export async function fetchRelease(timeoutMs = 5000): Promise<Release | null> {
  try {
    const get = async (path: string) => {
      const res = await fetch(`${RELEASE_RAW}/${path}`, { signal: AbortSignal.timeout(timeoutMs) });
      if (!res.ok) throw new Error(`${path}: ${res.status}`);
      return res.text();
    };
    const [plugin, changelog] = await Promise.all([get('.claude-plugin/plugin.json'), get('CHANGELOG.md')]);
    return parseRelease(plugin, changelog);
  } catch {
    return null; // the page simply leaves the release line out
  }
}

export const releaseDate = (date: string, lang: string) =>
  new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

// Every GitHub Release carries the plugin ready to install, always under this name, so this link
// downloads the latest version (Keelokit's Release workflow attaches it).
export const DOWNLOAD = 'https://github.com/leosimini/keelokit/releases/latest/download/keelokit-plugin.zip';

// Each release has a GitHub Release with its CHANGELOG entry as notes (Keelokit's Release workflow).
export const releaseNotes = (version: string) =>
  `https://github.com/leosimini/keelokit/releases/tag/v${version}`;

// The plugin ready to install, attached to that version's GitHub Release by Keelokit's Release
// workflow (from 0.8.0 on). It's the file to upload to Claude — not GitHub's "Source code" zip, which
// wraps the whole repository in a folder.
export const releaseZip = (version: string) =>
  `https://github.com/leosimini/keelokit/releases/download/v${version}/keelokit-plugin.zip`;
