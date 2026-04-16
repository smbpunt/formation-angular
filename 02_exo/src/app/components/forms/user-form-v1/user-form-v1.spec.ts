import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormV1 } from './user-form-v1';

describe('UserFormV1', () => {
  let component: UserFormV1;
  let fixture: ComponentFixture<UserFormV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormV1],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
