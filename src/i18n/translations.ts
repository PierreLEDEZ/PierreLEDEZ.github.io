const translations = {
  en: {
    'nav.home': 'home',
    'nav.skills': 'skills',
    'nav.projects': 'projects',
    'nav.career': 'career',
    'theme.ariaLabel': 'Theme',
    'lang.ariaLabel': 'Language',

    'home.subtitle': 'Software engineer · Brittany, FR',
    'home.bio':
      'I design solutions at the intersection of web, geospatial data, and artificial intelligence — from backend architecture to user interfaces.',
    'home.viewProjects': 'view projects →',
    'home.available': 'available',
    'home.heroLine2': 'fullstack × geodata × ai',

    'projects.title': 'Projects',
    'projects.count': 'projects',
    'projects.back': '← back',
    'projects.allProjects': '← all projects',
    'projects.sourceCode': 'Source code',
    'projects.private': 'Private',
    'projects.viewProject': 'View project',
    'projects.technologies': 'technologies',

    'skills.title': 'Skills',
    'skills.technologies': 'technologies',
    'skills.back': '← back',

    'career.title': 'Career',
    'career.path': 'ENIB → CERV → Siradel',
    'career.toeic': 'TOEIC 935',
    'career.back': '← back',

    'meta.description':
      'Pierre Le Dez — Software Development Engineer · Fullstack × Geodata × AI',
  },
  fr: {
    'nav.home': 'home',
    'nav.skills': 'skills',
    'nav.projects': 'projets',
    'nav.career': 'parcours',
    'theme.ariaLabel': 'Thème',
    'lang.ariaLabel': 'Langue',

    'home.subtitle': 'Ingénieur logiciel · Bretagne, FR',
    'home.bio':
      "Je conçois des solutions à la croisée du web, des données géospatiales et de l'intelligence artificielle — de l'architecture backend aux interfaces utilisateurs.",
    'home.viewProjects': 'voir les projets →',
    'home.available': 'disponible',
    'home.heroLine2': 'fullstack × geodata × ia',

    'projects.title': 'Projets',
    'projects.count': 'projets',
    'projects.back': '← retour',
    'projects.allProjects': '← tous les projets',
    'projects.sourceCode': 'Code source',
    'projects.private': 'Privé',
    'projects.viewProject': 'Voir le projet',
    'projects.technologies': 'technologies',

    'skills.title': 'Skills',
    'skills.technologies': 'technologies',
    'skills.back': '← retour',

    'career.title': 'Parcours',
    'career.path': 'ENIB → CERV → Siradel',
    'career.toeic': 'TOEIC 935',
    'career.back': '← retour',

    'meta.description':
      'Pierre Le Dez — Ingénieur Développement Logiciel · Fullstack × Geodata × IA',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];

export default translations;
