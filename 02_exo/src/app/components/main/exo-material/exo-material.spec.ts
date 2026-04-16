import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoMaterial } from './exo-material';

describe('ExoMaterial', () => {
  let component: ExoMaterial;
  let fixture: ComponentFixture<ExoMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoMaterial],
    }).compileComponents();

    fixture = TestBed.createComponent(ExoMaterial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
