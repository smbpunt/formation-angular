import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestTaches } from './gest-taches';

describe('GestTaches', () => {
  let component: GestTaches;
  let fixture: ComponentFixture<GestTaches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestTaches],
    }).compileComponents();

    fixture = TestBed.createComponent(GestTaches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
