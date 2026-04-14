import { Component, signal } from '@angular/core';
import { Basic } from './basic/basic';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly title = signal('Le titre de mon app Angular');
  // title: string = 'Ma première app Angular';
}
