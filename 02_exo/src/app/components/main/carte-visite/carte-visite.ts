import { Component } from '@angular/core';
import { CarteVisiteDetail } from './carte-visite-detail/carte-visite-detail';

@Component({
  selector: 'app-carte-visite',
  imports: [CarteVisiteDetail],
  templateUrl: './carte-visite.html',
  styleUrl: './carte-visite.scss',
})
export class CarteVisite {}
