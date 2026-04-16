import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTest } from './material-test';

describe('MaterialTest', () => {
  let component: MaterialTest;
  let fixture: ComponentFixture<MaterialTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTest],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
