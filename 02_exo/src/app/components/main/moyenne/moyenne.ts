import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-moyenne',
  templateUrl: './moyenne.html',
  styleUrl: './moyenne.scss',
})
export class Moyenne {
  noteMath = signal<number>(0);
  noteFrancais = signal<number>(0);
  noteHistoire = signal<number>(0);
  moyenne = computed(() => (this.noteMath() + this.noteFrancais() + this.noteHistoire()) / 3);
  mention = computed(() => {
    const m = this.moyenne();
    if (m < 8) return 'Insuffisant ❌';
    if (m < 10) return 'Passable 😐';
    if (m < 12) return 'Assez bien 🙂';
    if (m < 14) return 'Bien 👍';
    return 'Très bien ⭐';
  });

  protected updateMath(event: Event) {
    this.updateNote(event, this.noteMath);
  }

  protected updateFrancais(event: Event) {
    this.updateNote(event, this.noteFrancais);
  }

  protected updateHistoire(event: Event) {
    this.updateNote(event, this.noteHistoire);
  }

  private updateNote(event: Event, note: WritableSignal<number>) {
    const input = event.target as HTMLInputElement;
    const valeurBornee = Math.min(20, Math.max(0, input.valueAsNumber || 0));
    input.value = String(valeurBornee);
    note.set(valeurBornee);
  }
}
