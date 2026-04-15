import { Routes } from '@angular/router';
import { NotFound } from './components/error/not-found/not-found';
import { Welcome } from './components/main/welcome/welcome';
import { Goodbye } from './components/main/goodbye/goodbye';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'goodbye', component: Goodbye },

  // 404 page not found ** => */*/*
  { path: '**', component: NotFound },
];
