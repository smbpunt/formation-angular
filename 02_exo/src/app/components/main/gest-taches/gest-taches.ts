import { Component, signal } from '@angular/core';
import { Tache } from './tache/tache';

@Component({
  selector: 'app-gest-taches',
  imports: [Tache],
  templateUrl: './gest-taches.html',
  styleUrl: './gest-taches.scss',
})
export class GestTaches {
  taches = signal<string[]>(['Faire les courses', 'Appeler le medecin', 'Lire Angular docs']);

  protected deleteTache(tache: string) {
    this.taches.update((taches) => taches.filter((t) => t !== tache));
  }
}
