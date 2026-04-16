import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponents } from './observable-components';

describe('ObservableComponents', () => {
  let component: ObservableComponents;
  let fixture: ComponentFixture<ObservableComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
