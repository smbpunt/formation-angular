import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListObservable } from './user-list-observable';

describe('UserListObservable', () => {
  let component: UserListObservable;
  let fixture: ComponentFixture<UserListObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
