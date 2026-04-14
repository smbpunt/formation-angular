import { Component, input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {
  // protected title = input.required<String>;
  protected currentYear: number = new Date().getFullYear();
}
