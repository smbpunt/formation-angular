import { Component, signal } from '@angular/core';
import { ExoButton } from './exo-button/exo-button';
import { Ex1Buttons } from './ex1-buttons/ex1-buttons';
import { Ex2Slider } from './ex2-slider/ex2-slider';

type ExoView = 'exo-button' | 'ex1-buttons' | 'ex2-slider';

const DEFAULT_VIEW: ExoView = 'ex2-slider';

@Component({
  selector: 'app-exo-material',
  imports: [ExoButton, Ex1Buttons, Ex2Slider],
  templateUrl: './exo-material.html',
  styleUrl: './exo-material.scss',
})
export class ExoMaterial {
  views: { value: ExoView; label: string }[] = [
    { value: 'exo-button', label: 'Exo Button' },
    { value: 'ex1-buttons', label: 'Ex1 - Buttons' },
    { value: 'ex2-slider', label: 'Ex2 - Slider' },
  ];

  selected = signal<ExoView>(DEFAULT_VIEW);

  onSelect(event: Event) {
    this.selected.set((event.target as HTMLSelectElement).value as ExoView);
  }
}
