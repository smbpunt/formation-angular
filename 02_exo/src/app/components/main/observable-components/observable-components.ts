import { Component, signal } from '@angular/core';
import { MyFirstObservable } from './my-first-observable/my-first-observable';
import { UserListObservable } from './user-list-observable/user-list-observable';

type ObservableView = 'my-first-observable' | 'user-list-observable';

const DEFAULT_VIEW: ObservableView = 'user-list-observable';

@Component({
  selector: 'app-observable-components',
  imports: [MyFirstObservable, UserListObservable],
  templateUrl: './observable-components.html',
  styleUrl: './observable-components.scss',
})
export class ObservableComponents {
  views: { value: ObservableView; label: string }[] = [
    { value: 'my-first-observable', label: 'My First Observable' },
    { value: 'user-list-observable', label: 'Liste utilisateurs (HTTP)' },
  ];

  selected = signal<ObservableView>(DEFAULT_VIEW);

  onSelect(event: Event) {
    this.selected.set((event.target as HTMLSelectElement).value as ObservableView);
  }
}
