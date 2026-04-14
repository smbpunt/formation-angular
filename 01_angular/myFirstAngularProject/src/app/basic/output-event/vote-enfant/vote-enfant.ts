import { Component, output } from '@angular/core';

@Component({
  selector: 'app-vote-enfant',
  imports: [],
  templateUrl: './vote-enfant.html',
  styleUrl: './vote-enfant.scss',
})
export class VoteEnfant {
  voted = output<string>();

  vote(choice: 'pour' | 'contre' | 'abstention') {
    this.voted.emit(choice);
  }
}
