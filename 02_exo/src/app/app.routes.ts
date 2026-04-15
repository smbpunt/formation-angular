import { Routes } from '@angular/router';
import { NotFound } from './components/error/not-found/not-found';
import { Welcome } from './components/main/welcome/welcome';
import { Goodbye } from './components/main/goodbye/goodbye';
import { CompteurSimple } from './components/main/compteur-simple/compteur-simple';
import { Bonjour } from './components/main/bonjour/bonjour';
import { Rectangle } from './components/main/rectangle/rectangle';
import { Toggler } from './components/main/toggler/toggler';
import { Moyenne } from './components/main/moyenne/moyenne';
import { ExoIo } from './components/main/exo-io/exo-io';
import { Todo } from './components/main/todo/todo';
import { CarteVisite } from './components/main/carte-visite/carte-visite';
import { BadgeNote } from './components/main/badge-note/badge-note';
import { FicheContact } from './components/main/fiche-contact/fiche-contact';
import { Alerte } from './components/main/alerte/alerte';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'goodbye', component: Goodbye },
  { path: 'compteur', component: CompteurSimple },
  { path: 'bonjour', component: Bonjour },
  { path: 'rectangle', component: Rectangle },
  { path: 'toggler', component: Toggler },
  { path: 'moyenne', component: Moyenne },
  { path: 'todo', component: Todo },
  { path: 'io', component: ExoIo },
  { path: 'carte-visite', component: CarteVisite },
  { path: 'badge-note', component: BadgeNote },
  { path: 'fiche-contact', component: FicheContact },
  { path: 'alerte', component: Alerte },

  // 404 page not found ** => */*/*
  { path: '**', component: NotFound },
];
