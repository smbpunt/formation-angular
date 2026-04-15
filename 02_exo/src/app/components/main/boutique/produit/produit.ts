import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.scss',
})
export class Produit {
  produit = input.required<IProduitSimple>();
  ajouteAuPanier = output<IProduitSimple>();
}
