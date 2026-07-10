import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/types';
import { getAlternateLang } from '../i18n/utils';

type Project = CollectionEntry<'projects'>;

/** Strip the lang prefix from a collection slug, e.g. "en/plu-analysis" → "plu-analysis". */
export function stripLangPrefix(slug: string): string {
  return slug.replace(/^(en|fr)\//, '');
}

/**
 * Returns the published projects for a language, sorted by `order`.
 *
 * A project is hidden as soon as `published: false` is set on *either* side of
 * its EN/FR pair (paired via `alternateSlug`). Setting the flag on a single
 * file is therefore enough to hide both languages — and it guarantees we never
 * generate a detail page whose cross-language "alternate" link would 404.
 */
export async function getVisibleProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects');

  // Index every entry by "lang/slug" so we can look up an entry's alternate.
  const byKey = new Map<string, Project>(
    all.map((p) => [`${p.data.lang}/${stripLangPrefix(p.slug)}`, p]),
  );

  const isVisible = (p: Project): boolean => {
    if (p.data.published === false) return false;
    if (p.data.alternateSlug) {
      const altKey = `${getAlternateLang(p.data.lang)}/${p.data.alternateSlug}`;
      const alt = byKey.get(altKey);
      if (alt && alt.data.published === false) return false;
    }
    return true;
  };

  return all
    .filter((p) => p.data.lang === lang && isVisible(p))
    .sort((a, b) => a.data.order - b.data.order);
}
