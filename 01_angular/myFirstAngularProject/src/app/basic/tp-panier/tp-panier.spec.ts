import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpPanier } from './tp-panier';

describe('TpPanier', () => {
  let component: TpPanier;
  let fixture: ComponentFixture<TpPanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpPanier],
    }).compileComponents();

    fixture = TestBed.createComponent(TpPanier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
