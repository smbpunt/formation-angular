import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [];

  saveUser(user: IUser) {
    this.users.push(user);
  }
}
