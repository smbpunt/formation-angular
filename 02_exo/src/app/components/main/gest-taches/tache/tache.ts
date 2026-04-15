import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tache',
  imports: [],
  templateUrl: './tache.html',
  styleUrl: './tache.scss',
})
export class Tache {
  tache = input.required<string>();
  supprime = output<string>();
}
