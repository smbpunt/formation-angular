import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-bonjour',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './bonjour.html',
  styleUrl: './bonjour.scss',
})
export class Bonjour {
  prenom: string = '';
}
