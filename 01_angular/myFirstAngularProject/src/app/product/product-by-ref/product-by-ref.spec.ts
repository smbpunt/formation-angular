import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByRef } from './product-by-ref';

describe('ProductByRef', () => {
  let component: ProductByRef;
  let fixture: ComponentFixture<ProductByRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductByRef],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductByRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
