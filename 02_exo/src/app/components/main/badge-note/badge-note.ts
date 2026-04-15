import { Component } from '@angular/core';
import { BadgeNoteDetail } from './badge-note-detail/badge-note-detail';

@Component({
  selector: 'app-badge-note',
  imports: [BadgeNoteDetail],
  templateUrl: './badge-note.html',
  styleUrl: './badge-note.scss',
})
export class BadgeNote {
  userNotes = [
    { prenom: 'Alice', note: 12 },
    { prenom: 'Benoît', note: 4 },
    { prenom: 'Chloé', note: 7.5 },
    { prenom: 'David', note: 18 },
    { prenom: 'Emma', note: 11 },
  ];
}
