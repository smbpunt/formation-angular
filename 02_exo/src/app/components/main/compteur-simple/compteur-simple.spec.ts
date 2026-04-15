import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurSimple } from './compteur-simple';

describe('CompteurSimple', () => {
  let component: CompteurSimple;
  let fixture: ComponentFixture<CompteurSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteurSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(CompteurSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
