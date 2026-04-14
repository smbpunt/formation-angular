import { Component } from '@angular/core';
import { Couleur } from './couleur/couleur';
import { Calculatrice } from './calculatrice/calculatrice';
import { FormsModule } from '@angular/forms';
import { Produits } from './produits/produits';
import { Tva } from './tva/tva';

@Component({
  selector: 'app-basic',
  imports: [Couleur, Calculatrice, Produits, Tva, FormsModule],
  templateUrl: './basic.html',
  styleUrl: './basic.scss',
})
export class Basic {
  message: string = 'Bonjour AMU';
  colorMessage: string = 'red';

  username: string = '';

  protected onAction(): void {
    this.message = `Bonjour ${this.username} !`;
    this.colorMessage = this.username.length > 5 ? 'green' : 'blue';
  }
}
