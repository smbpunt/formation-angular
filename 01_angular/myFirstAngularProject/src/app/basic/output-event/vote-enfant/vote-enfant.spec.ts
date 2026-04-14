import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteEnfant } from './vote-enfant';

describe('VoteEnfant', () => {
  let component: VoteEnfant;
  let fixture: ComponentFixture<VoteEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteEnfant],
    }).compileComponents();

    fixture = TestBed.createComponent(VoteEnfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
