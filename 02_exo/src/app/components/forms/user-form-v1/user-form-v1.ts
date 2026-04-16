import { Component, inject } from '@angular/core';
import { IUser } from '../../../model/IUser';
import { Role } from '../../../model/Role';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UserService } from '../../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form-v1',
  imports: [FormsModule, JsonPipe],
  templateUrl: './user-form-v1.html',
  styleUrl: './user-form-v1.scss',
})
export class UserFormV1 {
  _userService = inject(UserService);
  _router = inject(Router);

  user: IUser = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    mainGroup: '',
  };
  roles = Object.values(Role);
  role: Role = Role.User;

  protected reset() {
    this.user = {
      id: '',
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      newPassword: '',
      mainGroup: '',
    };
    this.role = Role.User;
  }

  protected onSubmit() {
    this._userService.saveUser(this.user);
    this._router.navigateByUrl('/welcome');
  }
}
