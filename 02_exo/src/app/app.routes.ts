import { Routes } from '@angular/router';
import { NotFound } from './components/error/not-found/not-found';
import { Welcome } from './components/main/welcome/welcome';
import { Goodbye } from './components/main/goodbye/goodbye';
import { CompteurSimple } from './components/main/compteur-simple/compteur-simple';
import { Bonjour } from './components/main/bonjour/bonjour';
import { Rectangle } from './components/main/rectangle/rectangle';
import { Toggler } from './components/main/toggler/toggler';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'goodbye', component: Goodbye },
  { path: 'compteur', component: CompteurSimple },
  { path: 'bonjour', component: Bonjour },
  { path: 'rectangle', component: Rectangle },
  { path: 'toggler', component: Toggler },

  // 404 page not found ** => */*/*
  { path: '**', component: NotFound },
];
