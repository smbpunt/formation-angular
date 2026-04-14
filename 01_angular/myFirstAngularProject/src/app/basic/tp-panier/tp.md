# TP — Mini Panier d'Achat

## Énoncé

Créez un composant **`tp-panier`** qui simule un mini panier d'achat.

### Données de départ

Le composant contient une liste de 3 produits (en dur) :

| Réf | Nom             | Prix unitaire |
|-----|-----------------|---------------|
| p1  | Clavier USB     | 29.99         |
| p2  | Souris sans fil | 19.50         |
| p3  | Tapis de souris | 9.99          |

### Fonctionnalités attendues

1. **Chaque produit** a une **quantité** modifiable via des boutons `+` et `−` (minimum 0).
2. Le **sous-total** de chaque ligne (prix × quantité) est calculé automatiquement via `computed()`.
3. Le **total général** du panier est calculé via un `computed()` qui additionne les sous-totaux.
4. Une **remise de 10%** s'applique automatiquement si le total dépasse 50 €.
5. Le **total après remise** est aussi un `computed()`.

### Contraintes techniques

| Concept               | Où l'utiliser                                  |
|-----------------------|------------------------------------------------|
| `signal()`            | Stocker la quantité de chaque produit          |
| `computed()`          | Sous-totaux, total, remise, total après remise |
| Pipe `currency:'EUR'` | Afficher les prix et totaux                    |
| Pipe `number:'1.0-0'` | Afficher les quantités                         |
| Pipe `percent`        | Afficher le taux de remise                     |
