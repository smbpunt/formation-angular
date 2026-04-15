import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rectangle',
  imports: [FormsModule],
  templateUrl: './rectangle.html',
  styleUrl: './rectangle.scss',
})
export class Rectangle {
  largeur = signal<number>(0);
  longueur = signal<number>(0);
  surface = computed(() => this.largeur() * this.longueur());
}
