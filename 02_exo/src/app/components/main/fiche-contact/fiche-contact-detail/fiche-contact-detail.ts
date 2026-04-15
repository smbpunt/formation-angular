import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fiche-contact-detail',
  imports: [],
  templateUrl: './fiche-contact-detail.html',
  styleUrl: './fiche-contact-detail.scss',
})
export class FicheContactDetail {
  contact = input.required<IContact>();
}
