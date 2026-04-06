import type { Lang } from '../i18n/types';

interface TimelineEntry {
  date: string;
  title: string;
  org: string;
  desc?: string;
}

export const timeline: Record<Lang, TimelineEntry[]> = {
  en: [
    {
      date: 'Feb. 2022 — Present',
      title: 'Software Development Engineer',
      org: 'Siradel · Rennes',
      desc: 'GIS solutions, telecom dashboards, AI-powered urban planning analysis platform, skills management. Architecture support + cybersecurity training.',
    },
    {
      date: 'Feb. — Jul. 2021',
      title: 'Research Engineer',
      org: 'CERV · Brest',
      desc: 'Real-time human activity recognition. Multi-AlexNet + motion-to-RGB encoding.',
    },
    {
      date: '2020 — 2021',
      title: 'MSc Computer Science — SIIA',
      org: 'UBO · Brest',
    },
    {
      date: '2019',
      title: 'Cybersecurity Diploma',
      org: 'Université de Sherbrooke · Québec',
    },
    {
      date: '2015 — 2020',
      title: 'General Engineer, Computer Science Major',
      org: 'ENIB · Brest',
    },
  ],
  fr: [
    {
      date: 'Fév. 2022 — Présent',
      title: 'Ingénieur Développement Logiciel',
      org: 'Siradel · Rennes',
      desc: "Solutions SIG, dashboards télécoms, plateforme IA d'analyse de PLU, gestion des compétences. Appui archi + formations cybersécurité.",
    },
    {
      date: 'Fév. — Juil. 2021',
      title: 'Ingénieur de Recherche',
      org: 'CERV · Brest',
      desc: "Reconnaissance d'activités humaines temps réel. Multi-AlexNet + encodage motion-to-RGB.",
    },
    {
      date: '2020 — 2021',
      title: 'Master Informatique SIIA',
      org: 'UBO · Brest',
    },
    {
      date: '2019',
      title: 'Diplôme Cybersécurité',
      org: 'Université de Sherbrooke · Québec',
    },
    {
      date: '2015 — 2020',
      title: 'Ingénieur Généraliste, Spé. Informatique',
      org: 'ENIB · Brest',
    },
  ],
};
