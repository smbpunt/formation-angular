import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-couleur',
  imports: [FormsModule],
  templateUrl: './couleur.html',
  styleUrl: './couleur.scss',
})
export class Couleur {
  protected listeCouleurs: string[] = ['blue', 'red', 'pink', 'green', 'yellow'];
  protected choosenColor: string = 'black';
  protected newNumber: number = 0;
  protected auCarre: number[] = [1, 2, 4, 10, 20];

  protected addAuCarre() {
    this.auCarre.push(this.newNumber);
  }

  protected delete($index: number) {
    this.auCarre.splice($index, 1);
  }
}
