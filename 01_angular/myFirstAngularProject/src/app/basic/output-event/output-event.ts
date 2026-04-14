import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { VoteEnfant } from './vote-enfant/vote-enfant';

@Component({
  selector: 'app-output-event',
  imports: [VoteEnfant],
  templateUrl: './output-event.html',
  styleUrl: './output-event.scss',
})
export class OutputEvent {
  protected pour: WritableSignal<number> = signal(0);
  protected contre: WritableSignal<number> = signal(0);
  protected abstention: WritableSignal<number> = signal(0);
  protected nbVote: Signal<number> = computed(
    () => this.pour() + this.contre() + this.abstention(),
  );

  protected onVoteReceived(vote: string) {
    switch (vote) {
      case 'pour':
        this.pour.update((v) => v + 1);
        break;
      case 'contre':
        this.contre.update((v) => v + 1);
        break;
      case 'abstention':
        this.abstention.update((v) => v + 1);
        break;
      default:
        console.error('Erreur');
    }
  }
}
