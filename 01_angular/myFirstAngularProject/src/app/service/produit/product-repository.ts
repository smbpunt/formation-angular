import { Injectable } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  private products: IProduit[] = [
    { ref: 'p1', label: 'iPhone 16', price: 999, category: 'smartphone' },
    { ref: 'p2', label: 'Samsung Galaxy S25', price: 899, category: 'smartphone' },
    { ref: 'p3', label: 'Google Pixel 9', price: 799, category: 'smartphone' },
    { ref: 'p4', label: 'MacBook Air M4', price: 1299, category: 'laptop' },
    { ref: 'p5', label: 'Dell XPS 15', price: 1499, category: 'laptop' },
    { ref: 'p6', label: 'Lenovo ThinkPad X1', price: 1399, category: 'laptop' },
    { ref: 'p7', label: 'AirPods Pro 3', price: 279, category: 'accessoire' },
    { ref: 'p8', label: 'Logitech MX Master 4', price: 119, category: 'accessoire' },
    { ref: 'p9', label: 'Clavier Keychron K8', price: 89, category: 'accessoire' },
  ];

  public findAll(): IProduit[] {
    return this.products;
  }
}
