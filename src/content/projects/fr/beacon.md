---
title: "Beacon"
ctx: "Perso · 2025 · Projet perso"
tags: ["Rust", "Tauri", "TypeScript", "WSL", "Vite"]
github: ""
link: ""
image: ""
order: 1
lang: "fr"
alternateSlug: "beacon"
personal: true
---

Encoche Windows toujours au premier plan qui affiche en temps réel toutes les sessions Claude Code actives à travers les terminaux WSL. Un backend Tauri/Rust ingère les événements de hooks Claude Code via une API HTTP locale et restitue l'état des sessions. Les phases suivantes ajoutent les demandes de permission bloquantes et le saut vers le terminal.
