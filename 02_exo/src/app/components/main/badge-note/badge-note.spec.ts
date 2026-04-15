import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeNote } from './badge-note';

describe('BadgeNote', () => {
  let component: BadgeNote;
  let fixture: ComponentFixture<BadgeNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeNote],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
