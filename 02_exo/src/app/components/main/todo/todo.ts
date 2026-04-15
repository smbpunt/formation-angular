import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  inputTache = '';
  taches = signal<string[]>([]);
  nbTache = computed(() => this.taches().length);

  protected addTache() {
    this.taches.update((taches) => [...taches, this.inputTache]);
    this.inputTache = '';
  }
}
