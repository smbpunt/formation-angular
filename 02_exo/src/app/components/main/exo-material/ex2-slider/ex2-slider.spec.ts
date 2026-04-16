import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Slider } from './ex2-slider';

describe('Ex2Slider', () => {
  let component: Ex2Slider;
  let fixture: ComponentFixture<Ex2Slider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2Slider],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2Slider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
