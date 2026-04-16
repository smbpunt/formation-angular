import { Component, signal } from '@angular/core';
import { ExoButton } from './exo-button/exo-button';
import { Ex1Buttons } from './ex1-buttons/ex1-buttons';

type ExoView = 'exo-button' | 'ex1-buttons';

const DEFAULT_VIEW: ExoView = 'ex1-buttons';

@Component({
  selector: 'app-exo-material',
  imports: [ExoButton, Ex1Buttons],
  templateUrl: './exo-material.html',
  styleUrl: './exo-material.scss',
})
export class ExoMaterial {
  views: { value: ExoView; label: string }[] = [
    { value: 'ex1-buttons', label: 'Ex1 - Buttons' },
    { value: 'exo-button', label: 'Exo Button' },
  ];

  selected = signal<ExoView>(DEFAULT_VIEW);

  onSelect(event: Event) {
    this.selected.set((event.target as HTMLSelectElement).value as ExoView);
  }
}
