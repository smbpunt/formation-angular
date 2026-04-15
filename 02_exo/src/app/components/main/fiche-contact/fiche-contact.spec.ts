import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheContact } from './fiche-contact';

describe('FicheContact', () => {
  let component: FicheContact;
  let fixture: ComponentFixture<FicheContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheContact],
    }).compileComponents();

    fixture = TestBed.createComponent(FicheContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
