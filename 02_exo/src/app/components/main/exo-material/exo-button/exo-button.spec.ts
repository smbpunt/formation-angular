import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoButton } from './exo-button';

describe('ExoButton', () => {
  let component: ExoButton;
  let fixture: ComponentFixture<ExoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ExoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
