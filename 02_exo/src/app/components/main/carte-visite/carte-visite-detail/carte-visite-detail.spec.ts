import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteDetail } from './carte-visite-detail';

describe('CarteVisiteDetail', () => {
  let component: CarteVisiteDetail;
  let fixture: ComponentFixture<CarteVisiteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteVisiteDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteVisiteDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
