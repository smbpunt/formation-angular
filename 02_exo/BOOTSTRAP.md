# Les classes Bootstrap — logique de construction

Bootstrap repose sur une **convention de nommage cohérente**.
Comprendre la logique permet de deviner les classes sans consulter la documentation.

---

## 1. Structure générale d'un nom de classe

```
[préfixe]-[valeur]
[composant]-[propriété]-[valeur]
[composant]-[breakpoint]-[valeur]
```

Les parties sont séparées par des **tirets** (`-`).
Il n'y a jamais de camelCase ni d'underscore.

---

## 2. Les breakpoints — le suffixe responsive

Bootstrap est **mobile-first** : une classe sans breakpoint s'applique à toutes les tailles.
On ajoute un infixe pour cibler une taille minimale :

| Infixe   | Écran cible     | Largeur min |
|----------|-----------------|-------------|
| *(rien)* | Tous les écrans | 0px         |
| `sm`     | Small et +      | 576px       |
| `md`     | Medium et +     | 768px       |
| `lg`     | Large et +      | 992px       |
| `xl`     | X-Large et +    | 1200px      |
| `xxl`    | XX-Large et +   | 1400px      |

```html
<!-- col-12 sur mobile, col-6 à partir de sm, col-4 à partir de lg -->
<div class="col-12 col-sm-6 col-lg-4">...</div>
```

---

## 3. La grille — `col`, `row`, `container`

### Conteneurs

```html

<div class="container">        <!-- largeur max centrée selon le breakpoint -->
  <div class="container-fluid"> <!-- pleine largeur toujours -->
    <div class="container-md">    <!-- fluid en dessous de md, fixe au-dessus -->
```

### Lignes et colonnes

La grille Bootstrap divise l'espace en **12 colonnes**.

```
col-[breakpoint]-[1 à 12]
```

```html

<div class="row">
  <div class="col-12 col-md-6 col-lg-4">A</div>
  <div class="col-12 col-md-6 col-lg-4">B</div>
  <div class="col-12 col-md-12 col-lg-4">C</div>
</div>
```

| Classe     | Signification                        |
|------------|--------------------------------------|
| `col`      | Colonne auto (partage l'espace égal) |
| `col-6`    | 6/12 = 50% de largeur                |
| `col-md-4` | 4/12 dès md, 100% en dessous         |
| `col-auto` | Largeur ajustée au contenu           |

### Gouttières (`g`, `gx`, `gy`)

```html

<div class="row g-3">    <!-- gouttière horizontale ET verticale de 3 -->
  <div class="row gx-4">   <!-- gouttière horizontale (x) uniquement -->
    <div class="row gy-2">   <!-- gouttière verticale (y) uniquement -->
```

Les valeurs vont de `0` à `5` (correspondant à des multiples de `0.25rem`).

---

## 4. Espacement — `m` et `p`

### Syntaxe

```
[m|p][côté]-[breakpoint]-[valeur]
```

| Lettre | Propriété CSS |
|--------|---------------|
| `m`    | `margin`      |
| `p`    | `padding`     |

| Côté     | Direction       |
|----------|-----------------|
| *(rien)* | Tous les côtés  |
| `t`      | top             |
| `b`      | bottom          |
| `s`      | start (gauche)  |
| `e`      | end (droite)    |
| `x`      | gauche + droite |
| `y`      | haut + bas      |

| Valeur | Taille        |
|--------|---------------|
| `0`    | 0             |
| `1`    | 0.25rem       |
| `2`    | 0.5rem        |
| `3`    | 1rem          |
| `4`    | 1.5rem        |
| `5`    | 3rem          |
| `auto` | auto (marges) |

```html

<div class="mt-3 mb-2 px-4 py-0">
  <!-- margin-top: 1rem | margin-bottom: 0.5rem | padding-x: 1.5rem | padding-y: 0 -->
</div>

<!-- Responsive : pas de marge sur mobile, mt-4 à partir de md -->
<div class="mt-0 mt-md-4">...</div>
```

---

## 5. Flexbox — `d-flex` et compagnie

### Activation

```html

<div class="d-flex">          <!-- display: flex -->
  <div class="d-inline-flex">   <!-- display: inline-flex -->
    <div class="d-md-flex">       <!-- flex à partir de md -->
```

### Direction

```
flex-[row|column]
flex-[breakpoint]-[row|column]
```

```html

<div class="d-flex flex-column flex-md-row">
  <!-- colonne sur mobile, ligne sur md et + -->
</div>
```

### Justification (`justify-content`)

```
justify-content-[valeur]
```

| Classe                    | CSS équivalent                   |
|---------------------------|----------------------------------|
| `justify-content-start`   | `justify-content: flex-start`    |
| `justify-content-center`  | `justify-content: center`        |
| `justify-content-end`     | `justify-content: flex-end`      |
| `justify-content-between` | `justify-content: space-between` |
| `justify-content-around`  | `justify-content: space-around`  |
| `justify-content-evenly`  | `justify-content: space-evenly`  |

### Alignement (`align-items`)

```
align-items-[start|center|end|baseline|stretch]
```

### Écart entre éléments flex

```
gap-[0 à 5]
```

```html

<div class="d-flex justify-content-between align-items-center gap-3">
  <span>Gauche</span>
  <span>Centre</span>
  <span>Droite</span>
</div>
```

---

## 6. Display — `d-*`

```
d-[valeur]
d-[breakpoint]-[valeur]
```

| Classe           | CSS                     |
|------------------|-------------------------|
| `d-none`         | `display: none`         |
| `d-block`        | `display: block`        |
| `d-inline`       | `display: inline`       |
| `d-inline-block` | `display: inline-block` |
| `d-flex`         | `display: flex`         |
| `d-grid`         | `display: grid`         |

Exemple — masquer un élément sur mobile, l'afficher à partir de md :

```html

<div class="d-none d-md-block">Visible uniquement sur md et +</div>
```

---

## 7. Couleurs — `text-*`, `bg-*`, `border-*`

```
[propriété]-[couleur sémantique]
```

| Couleur     | Signification         |
|-------------|-----------------------|
| `primary`   | Couleur principale    |
| `secondary` | Couleur secondaire    |
| `success`   | Vert (succès)         |
| `danger`    | Rouge (erreur)        |
| `warning`   | Jaune (avertissement) |
| `info`      | Bleu clair            |
| `light`     | Clair                 |
| `dark`      | Sombre                |
| `white`     | Blanc                 |
| `muted`     | Gris atténué (text)   |

```html
<p class="text-danger">Texte rouge</p>
<div class="bg-primary text-white p-3">Fond bleu, texte blanc</div>
<span class="border border-success">Bordure verte</span>
```

---

## 8. Typographie

```
[propriété]-[valeur]
```

| Classe            | Effet                        |
|-------------------|------------------------------|
| `fw-bold`         | `font-weight: bold`          |
| `fw-light`        | `font-weight: 300`           |
| `fst-italic`      | `font-style: italic`         |
| `text-start`      | Aligné à gauche              |
| `text-center`     | Centré                       |
| `text-end`        | Aligné à droite              |
| `text-uppercase`  | Majuscules                   |
| `text-lowercase`  | Minuscules                   |
| `text-capitalize` | Première lettre en majuscule |
| `fs-1` à `fs-6`   | Taille de police (1 = grand) |
| `lh-1` / `lh-lg`  | Interligne                   |

---

## 9. Largeur et hauteur

```
w-[25|50|75|100|auto]
h-[25|50|75|100|auto]
```

```html

<div class="w-100">Pleine largeur</div>
<div class="w-50 mx-auto">50% centré</div>
```

---

## 10. Récapitulatif — lire une classe inconnue

Quand on rencontre une classe Bootstrap inconnue, on lit de gauche à droite :

```
justify-content - md - end
     ↑               ↑     ↑
 propriété      breakpoint  valeur
```

```
mt - 3
 ↑    ↑
 margin-top   1rem (échelon 3)
```

```
col - lg - 4
 ↑     ↑    ↑
grille  lg+  4/12 colonnes
```

> **Règle d'or** : si la classe contient un breakpoint (`sm`, `md`, `lg`, `xl`, `xxl`),
> il est toujours placé **entre** le composant et la valeur.
 
