import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheContactDetail } from './fiche-contact-detail';

describe('FicheContactDetail', () => {
  let component: FicheContactDetail;
  let fixture: ComponentFixture<FicheContactDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheContactDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(FicheContactDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
