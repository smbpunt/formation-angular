import { Component, inject } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { ProduitEnfant } from '../produit-enfant/produit-enfant';
import { ProductRepository } from '../../service/produit/product-repository';

@Component({
  selector: 'app-produits-parent',
  imports: [ProduitEnfant],
  templateUrl: './produits-parent.html',
  styleUrl: './produits-parent.scss',
})
export class ProduitsParent {
  protected productRepository = inject(ProductRepository);
  protected products: IProduit[] = [];
  constructor() {
    this.products = this.productRepository.findAll();
  }
}
