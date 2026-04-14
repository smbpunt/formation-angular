import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-bye',
  imports: [TitleCasePipe],
  templateUrl: './bye.html',
  styleUrl: './bye.scss',
})
export class Bye {
  prenom: string | null;

  constructor(route: ActivatedRoute) {
    this.prenom = route.snapshot.queryParamMap.get('prenom');
  }
}
