import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.scss',
})
export class Calculatrice {
  a: number = 0;
  b: number = 0;
  res: number = 0;
  protected x: number = 0;
  protected y: number = 0;
  protected showHistory: boolean = false;
  history: string[] = [];

  protected onCalculer(operateur: string): void {
    switch (operateur) {
      case '+':
        this.res = this.a + this.b;
        break;
      case '-':
        this.res = this.a - this.b;
        break;
      case '*':
        this.res = this.a * this.b;
        break;
      default:
        this.res = 0;
    }

    this.history.push(`${this.a} + ${this.b} ${operateur} ${this.res}`);
  }

  protected onMouseMove($event: MouseEvent) {
    let currentDiv: HTMLElement = <HTMLElement>$event.target;
    this.x = $event.pageX - currentDiv.offsetLeft;
    this.y = $event.pageY - currentDiv.offsetTop;
  }

  protected onMouseLeave() {
    this.x = 0;
    this.y = 0;
  }
}
