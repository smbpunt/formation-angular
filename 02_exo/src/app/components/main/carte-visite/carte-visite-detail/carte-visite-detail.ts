import { Component, input } from '@angular/core';

@Component({
  selector: 'app-carte-visite-detail',
  imports: [],
  templateUrl: './carte-visite-detail.html',
  styleUrl: './carte-visite-detail.scss',
})
export class CarteVisiteDetail {
  nom = input('Inconnu');
  poste = input('Collaborateur');
}
