import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstObservable } from './my-first-observable';

describe('MyFirstObservable', () => {
  let component: MyFirstObservable;
  let fixture: ComponentFixture<MyFirstObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFirstObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
