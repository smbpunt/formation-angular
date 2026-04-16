import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormV2 } from './user-form-v2';

describe('UserFormV2', () => {
  let component: UserFormV2;
  let fixture: ComponentFixture<UserFormV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormV2],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
