import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEvent } from './output-event';

describe('OutputEvent', () => {
  let component: OutputEvent;
  let fixture: ComponentFixture<OutputEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
