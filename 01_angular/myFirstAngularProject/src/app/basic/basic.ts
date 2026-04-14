import { Component } from '@angular/core';
import { Couleur } from './couleur/couleur';
import { Calculatrice } from './calculatrice/calculatrice';
import { FormsModule } from '@angular/forms';
import { Produits } from './produits/produits';
import { Tva } from './tva/tva';
import { Signals } from './signals/signals';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Pipes } from './pipes/pipes';
import { ProduitsParent } from './produits-parent/produits-parent';
import { TpPanier } from './tp-panier/tp-panier';

@Component({
  selector: 'app-basic',
  imports: [
    Couleur,
    Calculatrice,
    Produits,
    Tva,
    FormsModule,
    Signals,
    ComputedSignals,
    Pipes,
    ProduitsParent,
    TpPanier,
  ],
  templateUrl: './basic.html',
  styleUrl: './basic.scss',
})
export class Basic {
  message: string = 'Bonjour AMU';
  colorMessage: string = 'red';
  username: string = '';
  protected composants: string[] = [
    'Couleur',
    'Calculatrice',
    'Produits',
    'TVA',
    'Signals',
    'Computed-signals',
    'Pipes',
    'Produits-parent',
    'tp-panier',
  ];
  protected selectedComposant: string = this.composants[8];

  protected onAction(): void {
    this.message = `Bonjour ${this.username} !`;
    this.colorMessage = this.username.length > 5 ? 'green' : 'blue';
  }
}
