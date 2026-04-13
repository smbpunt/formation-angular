import { Component, signal } from '@angular/core';
import { Basic } from './basic/basic';

@Component({
  selector: 'app-root',
  imports: [Basic],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('myFirstAngularProject');
}
