# pld_ — Portfolio

Portfolio personnel — Pierre Le Dez.  
Astro + IBM Plex Mono + GitHub Pages.

## Quickstart

```bash
# 1. Clone
git clone https://github.com/PierreLEDEZ/PierreLEDEZ.github.io.git
cd PierreLEDEZ.github.io

# 2. Install
npm install

# 3. Dev
npm run dev
# → http://localhost:4321

# 4. Build
npm run build
# → ./dist/
```

## Ajouter un projet

Créer un fichier dans `src/content/projects/` :

```markdown
---
title: "Mon nouveau projet"
ctx: "Contexte · 2025"
tags: ["Python", "FastAPI"]
github: "https://github.com/PierreLEDEZ/mon-projet"
link: "/mon-projet/"
image: "/images/projects/mon-projet.png"
order: 6
---

Description du projet en Markdown.
```

Mettre le screenshot dans `public/images/projects/`.

Push → déploiement automatique.

## Modifier les skills

Éditer `src/data/skills.ts`.

## Modifier le parcours

Éditer `src/data/timeline.ts`.

## Structure

```
src/
  components/       ← Nav, SkillGroup, ProjectCard, TimelineItem, StatusBar
  content/projects/ ← un .md par projet (auto-listé + auto-routé)
  data/             ← skills.ts, timeline.ts
  layouts/          ← Base.astro (thème, nav, scripts)
  pages/            ← index, skills, projets/, parcours
  styles/           ← global.css (variables, animations, responsive)
public/
  images/projects/  ← screenshots
.github/workflows/  ← CI/CD GitHub Pages
```
