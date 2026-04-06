import type { Lang, RouteId } from './types';
import translations, { type TranslationKey } from './translations';

const routeMap: Record<Lang, Record<RouteId, string>> = {
  en: {
    home: '/',
    skills: '/skills/',
    projects: '/projects/',
    career: '/career/',
  },
  fr: {
    home: '/',
    skills: '/skills/',
    projects: '/projets/',
    career: '/parcours/',
  },
};

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}

export function localePath(lang: Lang, routeId: RouteId): string {
  return `/${lang}${routeMap[lang][routeId]}`;
}

export function projectPath(lang: Lang, slug: string): string {
  const base = lang === 'en' ? 'projects' : 'projets';
  return `/${lang}/${base}/${slug}/`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

export function getAlternateUrl(lang: Lang, routeId: RouteId): string {
  const alt = getAlternateLang(lang);
  return localePath(alt, routeId);
}

export function getNavLinks(lang: Lang) {
  const ids: RouteId[] = ['home', 'skills', 'projects', 'career'];
  return ids.map((id) => ({
    id,
    href: localePath(lang, id),
    label: t(lang, `nav.${id}` as TranslationKey),
  }));
}
