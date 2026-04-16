import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-ex1-buttons',
  imports: [MatButton],
  templateUrl: './ex1-buttons.html',
  styleUrl: './ex1-buttons.scss',
})
export class Ex1Buttons {
  protected nbClic: number = 0;

  protected increment() {
    this.nbClic++;
  }
}
