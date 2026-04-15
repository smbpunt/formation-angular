import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { Welcome } from './welcome/welcome';
import { NotFound } from './error/not-found/not-found';
import { Bonjour } from './bonjour/bonjour';
import { Bye } from './bye/bye';
import { ProductByRef } from './product/product-by-ref/product-by-ref';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'basic', component: Basic },
  { path: 'bonjour/:nom', component: Bonjour },
  { path: 'product/:ref', component: ProductByRef },
  { path: 'bye', component: Bye },

  // 404 page not found ** => */*/*
  { path: '**', component: NotFound },
];
