# Exercices — Signals & Computed Signals en Angular

> **Prérequis** : Angular 17+, notions de base sur les composants.  
> **Objectif** : Maîtriser `signal()`, `.set()`, `.update()`, `computed()` et `effect()`.

---

## Rappel rapide

```typescript
import { signal, computed, effect } from '@angular/core';

// Créer un signal
const count = signal(0);

// Lire la valeur (toujours avec ())
console.log(count()); // 0

// Modifier
count.set(5);
count.update(v => v + 1);

// Valeur dérivée automatique
const double = computed(() => count() * 2);

// Effet de bord
effect(() => console.log('count vaut', count()));
```

---

## Exercice 1 — Compteur simple ⭐

**Contexte** : Le classique des classiques.

**Objectif** : Créer un composant avec un signal `compteur` initialisé à `0`.  
Afficher la valeur et proposer deux boutons : **+1** et **−1**.

**Contraintes** :

- Utiliser `.update()` pour modifier le signal.
- Le compteur ne doit pas passer en dessous de 0.

**Template attendu** :

```
Compteur : 3
[ − ] [ + ]
```

<details>
<summary>💡 Indice</summary>

```typescript
compteur = signal(0);

incrementer()
{
  this.compteur.update(v => v + 1);
}
decrementer()
{
  this.compteur.update(v => Math.max(0, v - 1));
}
```

</details>

---

## Exercice 2 — Signal texte et affichage en temps réel ⭐

**Objectif** : Créer un signal `prenom` de type `string`.  
Relier un `<input>` à ce signal avec `(input)` et afficher en temps réel :

```
Bonjour, Marie !
```

**Contraintes** :

- Utiliser `$event.target` pour lire la valeur de l'input.
- Si le champ est vide, afficher : `Bonjour, inconnu !`

<details>
<summary>💡 Indice</summary>

```typescript
prenom = signal('');

majPrenom(event
:
Event
)
{
  this.prenom.set((event.target as HTMLInputElement).value);
}
```

```html
<input (input)="majPrenom($event)" placeholder="Ton prénom">
<p>Bonjour, {{ prenom() || 'inconnu' }} !</p>
```

</details>

---

## Exercice 3 — Computed : surface d'un rectangle ⭐⭐

**Objectif** : Créer deux signals `largeur` et `hauteur` (nombres).  
Ajouter deux inputs de type `number` pour les modifier.  
Afficher la surface calculée automatiquement avec `computed()`.

**Formula** : `surface = largeur × hauteur`

**Affichage attendu** :

```
Largeur : 5   Hauteur : 3
Surface : 15 m²
```

<details>
<summary>💡 Indice</summary>

```typescript
largeur = signal(1);
hauteur = signal(1);
surface = computed(() => this.largeur() * this.hauteur());
```

```html
<input type="number" [value]="largeur()" (input)="largeur.set(+$any($event.target).value)">
```

</details>

---

## Exercice 4 — Toggle booléen ⭐

**Objectif** : Créer un signal `estVisible` de type `boolean`.  
Un bouton doit alterner entre afficher et masquer un message.  
Le texte du bouton doit changer en conséquence.

**Affichage** :

```
[ Masquer ]
👋 Ce message est visible !
```

<details>
<summary>💡 Indice</summary>

```typescript
estVisible = signal(true);

basculer()
{
  this.estVisible.update(v => !v);
}
```

```html

<button (click)="basculer()">{{ estVisible() ? 'Masquer' : 'Afficher' }}</button>
@if (estVisible()) { <p>👋 Ce message est visible !</p> }
```

</details>

---

## Exercice 5 — Computed : Moyenne scolaire ⭐⭐

**Objectif** : Créer trois signals `noteMath`, `noteFrancais`, `noteHistoire` (notes sur 20).  
Calculer la **moyenne** avec `computed()` et afficher la **mention** correspondante.

**Règle des mentions** :

| Moyenne   | Mention       |
|-----------|---------------|
| < 8       | Insuffisant ❌ |
| 8 – 9.9   | Passable 😐   |
| 10 – 11.9 | Assez bien 🙂 |
| 12 – 13.9 | Bien 👍       |
| ≥ 14      | Très bien ⭐   |

**Affichage attendu** :

```
Math : [15]   Français : [12]   Histoire : [10]
Moyenne : 12.33 / 20
Mention : Bien 👍
```

<details>
<summary>💡 Indice</summary>

```typescript
noteMath = signal(10);
noteFrancais = signal(10);
noteHistoire = signal(10);

moyenne = computed(() =>
  (this.noteMath() + this.noteFrancais() + this.noteHistoire()) / 3
);

mention = computed(() => {
  const m = this.moyenne();
  if (m < 8) return 'Insuffisant ❌';
  if (m < 10) return 'Passable 😐';
  if (m < 12) return 'Assez bien 🙂';
  if (m < 14) return 'Bien 👍';
  return 'Très bien ⭐';
});
```

</details>

---

## Exercice 6 — Liste de tâches (Todo) ⭐⭐

**Objectif** : Gérer une liste de tâches avec des signals.

**Fonctionnalités** :

1. Un signal `taches` contenant un tableau de strings.
2. Un input pour saisir une nouvelle tâche.
3. Un bouton **Ajouter** qui appelle `.update()` pour pousser dans le tableau.
4. Un `computed()` `nbTaches` qui affiche le nombre de tâches.

**Affichage** :

```
[ Faire les courses        ] [Ajouter]
Nombre de tâches : 3
• Faire les courses
• Appeler le médecin
• Lire un livre
```

<details>
<summary>💡 Indice</summary>

```typescript
taches = signal<string[]>([]);
nouvelleTache = signal('');
nbTaches = computed(() => this.taches().length);

ajouter()
{
  if (!this.nouvelleTache()) return;
  this.taches.update(t => [...t, this.nouvelleTache()]);
  this.nouvelleTache.set('');
}
```

</details>

---

## Exercice 7 — Computed chaîné ⭐⭐⭐

**Objectif** : Partir d'un signal `temperature` en Celsius.  
Créer deux `computed()` chaînés :

- `fahrenheit = computed()` → conversion en °F
- `description = computed()` → basé sur `fahrenheit()`, retourner `'Froid'`, `'Tiède'` ou `'Chaud'`

**Règle** :

- < 50°F → Froid
- 50–77°F → Tiède
- > 77°F → Chaud

<details>
<summary>💡 Indice</summary>

```typescript
celsius = signal(20);
fahrenheit = computed(() => this.celsius() * 9 / 5 + 32);
description = computed(() => {
  const f = this.fahrenheit();
  if (f < 50) return 'Froid ❄️';
  if (f <= 77) return 'Tiède 🌤️';
  return 'Chaud ☀️';
});
```

</details>

---

## Exercice 8 — Effect : historique des valeurs ⭐⭐⭐

**Objectif** : Créer un signal `mot` (string).  
Utiliser `effect()` dans le constructeur pour pousser chaque nouvelle valeur dans un tableau `historique` (tableau classique, pas un signal).  
Afficher l'historique sous le champ.

**Point pédagogique** : `effect()` s'exécute automatiquement à chaque changement du signal qu'il lit.

<details>
<summary>💡 Indice</summary>

```typescript
mot = signal('');
historique: string[] = [];

constructor()
{
  effect(() => {
    const valeur = this.mot();
    if (valeur) this.historique.push(valeur);
  });
}
```

</details>

---

## Exercice 9 — Panier minimal ⭐⭐⭐

**Objectif** : Créer un mini panier avec un signal `quantite` (nombre entier ≥ 0) et un signal `prixUnitaire`.

Afficher avec `computed()` :

- Le **sous-total** (`quantite × prixUnitaire`)
- La **TVA** (20% du sous-total)
- Le **total TTC** (sous-total + TVA)

Utiliser le pipe `currency:'EUR'` dans le template.

<details>
<summary>💡 Indice</summary>

```typescript
quantite = signal(1);
prixUnitaire = signal(29.99);

sousTotal = computed(() => this.quantite() * this.prixUnitaire());
tva = computed(() => this.sousTotal() * 0.20);
totalTTC = computed(() => this.sousTotal() + this.tva());
```

</details>

---

## Exercice 10 — Filtre de liste ⭐⭐⭐

**Objectif** : Créer un signal `recherche` (string) et un signal `produits` contenant une liste de noms.  
Ajouter un `computed()` `produitsFiltres` qui retourne uniquement les produits dont le nom contient la valeur du signal `recherche` (insensible à la casse).

**Données de départ** :

```typescript
produits = signal(['Pomme', 'Poire', 'Fraise', 'Mangue', 'Pastèque', 'Papaye']);
```

**Affichage** :

```
[ po            ]
• Pomme
• Poire
```

<details>
<summary>💡 Indice</summary>

```typescript
recherche = signal('');

produitsFiltres = computed(() =>
  this.produits().filter(p =>
    p.toLowerCase().includes(this.recherche().toLowerCase())
  )
);
```

```html
<input (input)="recherche.set($any($event.target).value)" placeholder="Rechercher...">
@for (p of produitsFiltres(); track p) {
<li>{{ p }}</li>
}
```

</details>

## Récapitulatif des concepts couverts

| Exercice | Concepts                                               |
|----------|--------------------------------------------------------|
| 1        | `signal()`, `.update()`                                |
| 2        | `signal()`, `.set()`, binding input                    |
| 3        | `computed()` à deux sources                            |
| 4        | signal booléen, toggle                                 |
| 5        | `computed()` imbriqué, moyenne, logique conditionnelle |
| 6        | signal tableau, `.update()` avec spread                |
| 7        | `computed()` chaîné                                    |
| 8        | `effect()`, effets de bord                             |
| 9        | `computed()` multiples, pipes                          |
| 10       | `computed()` + filtre sur tableau                      |
| Bonus    | `setInterval`, `OnDestroy`, `computed()` formatage     | 
