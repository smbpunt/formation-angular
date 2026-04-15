import { Component } from '@angular/core';

@Component({
  selector: 'app-toggler',
  imports: [],
  templateUrl: './toggler.html',
  styleUrl: './toggler.scss',
})
export class Toggler {
  isVisible: boolean = false;

  protected toggle() {
    this.isVisible = !this.isVisible;
  }
}
