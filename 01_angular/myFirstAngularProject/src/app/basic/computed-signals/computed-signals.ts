import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed-signals',
  imports: [FormsModule],
  templateUrl: './computed-signals.html',
  styleUrl: './computed-signals.scss',
})
export class ComputedSignals {
  prixHT: WritableSignal<number> = signal(100);
  tva: WritableSignal<number> = signal(20);
  prixTTC: Signal<number> = computed(() => this.prixHT() * (1 + this.tva() / 100));
}
