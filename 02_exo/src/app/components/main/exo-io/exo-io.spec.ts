import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoIo } from './exo-io';

describe('ExoIo', () => {
  let component: ExoIo;
  let fixture: ComponentFixture<ExoIo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoIo],
    }).compileComponents();

    fixture = TestBed.createComponent(ExoIo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
