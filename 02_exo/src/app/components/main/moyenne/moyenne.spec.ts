import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moyenne } from './moyenne';

describe('Moyenne', () => {
  let component: Moyenne;
  let fixture: ComponentFixture<Moyenne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moyenne],
    }).compileComponents();

    fixture = TestBed.createComponent(Moyenne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
