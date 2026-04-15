import { Component } from '@angular/core';
import { Enfant } from '../enfant/enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  compteur: number = 0;

  updateCompteur(action: string) {
    if (action === '+') {
      this.compteur++;
    } else if (action === '-') {
      this.compteur--;
    }
  }
}
