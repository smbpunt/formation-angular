import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couleur } from './couleur';

describe('Couleur', () => {
  let component: Couleur;
  let fixture: ComponentFixture<Couleur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Couleur],
    }).compileComponents();

    fixture = TestBed.createComponent(Couleur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
