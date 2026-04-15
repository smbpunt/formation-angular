import { Component, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss',
})
export class Enfant {
  modification = output<string>();

  protected increment() {
    this.modification.emit('+');
  }

  protected decrement() {
    this.modification.emit('-');
  }

  constructor() {
    setTimeout(() => this.increment(), 1000);
    setTimeout(() => this.increment(), 2000);
    setTimeout(() => this.increment(), 3000);
    setTimeout(() => this.increment(), 4000);
    setTimeout(() => this.increment(), 5000);
    setTimeout(() => this.increment(), 6000);
  }
}
