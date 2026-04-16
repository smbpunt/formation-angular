import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Buttons } from './ex1-buttons';

describe('Ex1Buttons', () => {
  let component: Ex1Buttons;
  let fixture: ComponentFixture<Ex1Buttons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1Buttons],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1Buttons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
