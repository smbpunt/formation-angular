import { Component, inject } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { FormsModule } from '@angular/forms';
import { ProductRepository } from '../../service/produit/product-repository';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [FormsModule, JsonPipe],
  templateUrl: './produits.html',
  styleUrl: './produits.scss',
})
export class Produits {
  protected productRepository = inject(ProductRepository);
  protected categories: string[] = ['smartphone', 'laptop', 'accessoire'];
  protected selectedCategory: string = '';
  protected filteredProducts: IProduit[] = [];

  protected products: IProduit[] = [];
  constructor() {
    this.products = this.productRepository.findAll();
  }

  protected onSelectCategory() {
    this.filteredProducts = this.products.filter((p) => p.category === this.selectedCategory);
  }

  protected onClickCategory(c: string) {
    this.selectedCategory = c;
    this.filteredProducts = this.products.filter((p) => p.category === this.selectedCategory);
  }
}
