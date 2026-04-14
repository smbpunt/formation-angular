import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { Welcome } from './welcome/welcome';
import { NotFound } from './error/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'basic', component: Basic },

  // 404 page not found ** => */*/*
  { path: '**', component: NotFound },
];
