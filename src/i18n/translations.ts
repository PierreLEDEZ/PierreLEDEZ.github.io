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
    'projects.personal': 'personal',
    'projects.prevPage': 'Previous projects',
    'projects.nextPage': 'Next projects',

    'skills.title': 'Skills',
    'skills.technologies': 'technologies',
    'skills.back': '← back',

    'career.title': 'Career',
    'career.path': 'ENIB → CERV → Siradel',
    'career.toeic': 'TOEIC 935',
    'career.back': '← back',

    'meta.description':
      'Pierre Le Dez — Software Development Engineer · Fullstack × Geodata × AI',
    'skills.description':
      'Technologies, languages, and frameworks Pierre Le Dez works with across fullstack development, geospatial data, and artificial intelligence.',
    'career.description':
      "Pierre Le Dez's career path: from ENIB engineering school and CERV research to software engineering at Siradel.",
    'projects.description':
      'Selected software projects by Pierre Le Dez — fullstack web, geospatial tools, AI pipelines, internal platforms.',
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
    'projects.personal': 'perso',
    'projects.prevPage': 'Projets précédents',
    'projects.nextPage': 'Projets suivants',

    'skills.title': 'Skills',
    'skills.technologies': 'technologies',
    'skills.back': '← retour',

    'career.title': 'Parcours',
    'career.path': 'ENIB → CERV → Siradel',
    'career.toeic': 'TOEIC 935',
    'career.back': '← retour',

    'meta.description':
      'Pierre Le Dez — Ingénieur Développement Logiciel · Fullstack × Geodata × IA',
    'skills.description':
      "Technologies, langages et frameworks utilisés par Pierre Le Dez en développement fullstack, données géospatiales et intelligence artificielle.",
    'career.description':
      "Le parcours de Pierre Le Dez : de l'école d'ingénieurs ENIB et de la recherche au CERV à l'ingénierie logicielle chez Siradel.",
    'projects.description':
      "Sélection de projets logiciels de Pierre Le Dez — web fullstack, outils géospatiaux, pipelines IA, plateformes internes.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];

export default translations;
