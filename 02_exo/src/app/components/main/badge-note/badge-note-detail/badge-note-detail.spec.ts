import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeNoteDetail } from './badge-note-detail';

describe('BadgeNoteDetail', () => {
  let component: BadgeNoteDetail;
  let fixture: ComponentFixture<BadgeNoteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeNoteDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeNoteDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
