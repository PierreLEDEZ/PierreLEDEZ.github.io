import type { Lang } from '../i18n/types';

interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: Record<Lang, SkillGroup[]> = {
  en: [
    {
      category: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Rust', 'Go'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Tailwind', 'Redux / NgRx'],
    },
    { category: 'Backend', items: ['FastAPI', 'Flask', 'Django', 'Spring Boot'] },
    {
      category: 'Data & AI',
      items: ['Keras', 'PyTorch', 'PostgreSQL', 'PostGIS', 'ChromaDB', 'OpenCV'],
    },
    {
      category: 'GIS & Geomatics',
      items: ['OpenLayers', 'GDAL / OGR', 'Geopandas'],
    },
    {
      category: 'Infrastructure',
      items: ['Docker', 'GitLab CI/CD', 'Linux', 'Git'],
    },
  ],
  fr: [
    {
      category: 'Langages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Rust', 'Go'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Tailwind', 'Redux / NgRx'],
    },
    { category: 'Backend', items: ['FastAPI', 'Flask', 'Django', 'Spring Boot'] },
    {
      category: 'Data & IA',
      items: ['Keras', 'PyTorch', 'PostgreSQL', 'PostGIS', 'ChromaDB', 'OpenCV'],
    },
    {
      category: 'SIG & Géomatique',
      items: ['OpenLayers', 'GDAL / OGR', 'Geopandas'],
    },
    {
      category: 'Infrastructure',
      items: ['Docker', 'GitLab CI/CD', 'Linux', 'Git'],
    },
  ],
};
