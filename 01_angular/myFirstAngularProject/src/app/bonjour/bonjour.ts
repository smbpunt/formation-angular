import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-bonjour',
  imports: [TitleCasePipe],
  templateUrl: './bonjour.html',
  styleUrl: './bonjour.scss',
})
export class Bonjour {
  nom: string = '';
  constructor(route: ActivatedRoute) {
    this.nom = route.snapshot.paramMap.get('nom') ?? '';
  }
}
