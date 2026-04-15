import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteEnfant } from './alerte-enfant';

describe('AlerteEnfant', () => {
  let component: AlerteEnfant;
  let fixture: ComponentFixture<AlerteEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlerteEnfant],
    }).compileComponents();

    fixture = TestBed.createComponent(AlerteEnfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
