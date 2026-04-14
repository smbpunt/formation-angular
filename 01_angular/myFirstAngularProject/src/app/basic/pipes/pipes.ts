import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  // Pipes sur les chaines de caractères
  nom: string = 'John Legend BAGUETTE';

  // Pipes sur les nombres
  price: number = 1234.567;
  percent: number = 0.8542;

  // Pipes sur les dates
  now = new Date();

  // Pipes sur les objets / JSON
  utilisateur = {
    prenom: 'Marie',
    nom: 'Curie',
    age: 42,
    prix_nobel: ['Physique', 'Chimie', 'Test', 'Test2'],
  };
}
