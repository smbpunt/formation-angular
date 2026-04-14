import { Component, inject } from '@angular/core';
import { PreferenceService } from '../../service/preference-service';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // Ancienne méthode d'injection de dépendances
  // constructor(preference: PreferenceService) {}
  // Nouvelle méthodes =>
  preference = inject(PreferenceService);
}
