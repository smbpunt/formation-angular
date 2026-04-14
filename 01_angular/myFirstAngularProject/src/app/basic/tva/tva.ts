import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tva',
  imports: [FormsModule],
  templateUrl: './tva.html',
  styleUrl: './tva.scss',
})
export class Tva {
  protected price: number = 0;
  protected priceAfterTva: number = 0;
  protected availableTva: number[] = [5, 10, 20];
  protected selectedTva: number = 5;

  protected onSelectTva(t: number) {
    if (t !== this.selectedTva) {
      this.selectedTva = t;
      this.updateTva();
    }
  }

  protected updateTva() {
    this.priceAfterTva = (this.price * (100 + this.selectedTva)) / 100;
  }
}
