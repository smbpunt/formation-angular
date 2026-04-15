import { Component } from '@angular/core';
import { AlerteEnfant } from './alerte-enfant/alerte-enfant';

@Component({
  selector: 'app-alerte',
  imports: [AlerteEnfant],
  templateUrl: './alerte.html',
  styleUrl: './alerte.scss',
})
export class Alerte {
  nbAlerte = 0;
  protected increment() {
    this.nbAlerte++;
  }
}
