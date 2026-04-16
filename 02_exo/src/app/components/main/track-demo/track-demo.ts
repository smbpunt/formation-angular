import { Component, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-track-demo',
  templateUrl: './track-demo.html',
  styleUrl: './track-demo.scss',
})
export class TrackDemo {
  users = signal<User[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);

  addUserAtStart() {
    const newId = Date.now();
    this.users.update((list) => [{ id: newId, name: 'Charlie' }, ...list]);
  }
}
