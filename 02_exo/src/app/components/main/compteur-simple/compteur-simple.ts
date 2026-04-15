import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-compteur-simple',
  imports: [],
  templateUrl: './compteur-simple.html',
  styleUrl: './compteur-simple.scss',
})
export class CompteurSimple {
  protected compteur: WritableSignal<number> = signal<number>(0);

  protected onClick(action: '+' | '-') {
    if (action === '+') {
      this.compteur.update((n) => n + 1);
    } else if (this.compteur() > 0) {
      this.compteur.update((n) => n - 1);
    }
  }
}
