import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  protected count1: number = 10;
  protected count2: WritableSignal<number> = signal(10);

  constructor() {
    setTimeout(() => (this.count1 = 30), 3000);
    setTimeout(() => this.count2.set(30), 3000);
  }
}
