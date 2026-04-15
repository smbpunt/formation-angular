import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge-note-detail',
  imports: [],
  templateUrl: './badge-note-detail.html',
  styleUrl: './badge-note-detail.scss',
})
export class BadgeNoteDetail {
  note = input.required<number>();
  prenom = input.required<string>();
}
