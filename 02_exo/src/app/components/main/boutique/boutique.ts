import { Component, computed, signal } from '@angular/core';
import { Produit } from './produit/produit';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-boutique',
  imports: [Produit, JsonPipe],
  templateUrl: './boutique.html',
  styleUrl: './boutique.scss',
})
export class Boutique {
  produits: IProduitSimple[] = [
    { nom: 'Pomme', prix: 0.5, stock: 120 },
    { nom: 'Pain', prix: 1.2, stock: 35 },
    { nom: 'Lait', prix: 0.95, stock: 60 },
    { nom: 'Fromage', prix: 4.8, stock: 18 },
    { nom: 'Chocolat', prix: 2.3, stock: 42 },
  ];

  protected panier = signal<IProduitSimple[]>([]);
  protected total = computed(() => this.panier().reduce((s, p) => s + p.prix, 0));

  protected ajouteAuPanier(produit: IProduitSimple) {
    if (produit.stock > 0) {
      produit.stock--;
      this.panier.update((p) => [...p, produit]);
    }
  }
}
