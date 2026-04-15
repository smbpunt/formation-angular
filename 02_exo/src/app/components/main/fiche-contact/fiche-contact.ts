import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FicheContactDetail } from './fiche-contact-detail/fiche-contact-detail';

@Component({
  selector: 'app-fiche-contact',
  imports: [JsonPipe, FicheContactDetail],
  templateUrl: './fiche-contact.html',
  styleUrl: './fiche-contact.scss',
})
export class FicheContact {
  contacts: IContact[] = [
    { prenom: 'Alice', nom: 'Martin', email: 'alice.martin@example.com', ville: 'Paris' },
    { prenom: 'Bastien', nom: 'Nicolau', email: 'bastien.nicolau@example.com', ville: 'Marseille' },
    { prenom: 'Chloé', nom: 'Dubois', email: 'chloe.dubois@example.com', ville: 'Lyon' },
    { prenom: 'David', nom: 'Lefevre', email: 'david.lefevre@example.com', ville: 'Toulouse' },
    { prenom: 'Emma', nom: 'Rousseau', email: 'emma.rousseau@example.com', ville: 'Bordeaux' },
  ];
}
