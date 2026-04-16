import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer,
            MatSidenavModule, MatNavList, MatListItem, MatDivider],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Exo 2');
}
