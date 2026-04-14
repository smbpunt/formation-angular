# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexte

Projet de **formation Angular** (apprentissage). Ce n'est pas du code de production — chaque composant existe pour illustrer un concept.

## Comportement attendu

- Quand l'utilisateur pose une **question**, expliquer le concept d'abord et **ne rien modifier** sans validation explicite. La pédagogie passe avant l'efficacité.
- Quand on demande du code, le proposer en expliquant les choix Angular sous-jacents (lifecycle, binding, signals…).

## Stack

- Angular **21** (standalone components, pas de NgModules)
- TypeScript strict complet (`strict`, `strictTemplates`, `strictInjectionParameters`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`…)
- Tests : **Vitest** (pas Karma) — `ng test` lance vitest
- Styles : **SCSS** pour tous les composants
- Prettier configuré (2 espaces, single quotes, print width 100)

## Conventions du projet

- Nouveaux composants d'apprentissage → `src/app/basic/<nom>/` (suivre le pattern de `couleur/`, `calculatrice/`, `produits/`, `tva/`, `signals/`).
- `src/app/basic/basic.ts` joue le rôle de "routeur pédagogique" via `selectedComposant` — y câbler les nouveaux composants pour les rendre accessibles.
- Préfixe sélecteur : `app-` (configuré dans `angular.json`).
- Chaque composant : `*.ts`, `*.html`, `*.scss`, `*.spec.ts` séparés (pas de templates inline).

## Signals

La formation **introduit les signals maintenant** (`src/app/basic/signals/`). Pour les nouveaux exemples liés à ce module, privilégier `signal()` / `computed()` / `effect()`. Pour les composants antérieurs (couleur, calculatrice…), conserver l'approche propriétés + `ngModel` / event binding pour ne pas casser la progression.

## Commandes

Standard Angular CLI — `npm start`, `npm run build`, `npm test`, `npm run watch`. Rien de custom.
