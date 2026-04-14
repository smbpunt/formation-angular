import { Component, input, InputSignal } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit-enfant',
  imports: [CurrencyPipe],
  templateUrl: './produit-enfant.html',
  styleUrl: './produit-enfant.scss',
})
export class ProduitEnfant {
  public product: InputSignal<IProduit> = input.required<IProduit>();
}
