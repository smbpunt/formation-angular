import { Component, output } from '@angular/core';

@Component({
  selector: 'app-alerte-enfant',
  imports: [],
  templateUrl: './alerte-enfant.html',
  styleUrl: './alerte-enfant.scss',
})
export class AlerteEnfant {
  alerte = output<void>();

  protected alertParent() {
    this.alerte.emit();
  }
}
