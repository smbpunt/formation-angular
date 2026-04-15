import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduit } from '../../interfaces/IProduit';
import { ProductRepository } from '../../service/produit/product-repository';
import { ProduitEnfant } from '../../basic/produit-enfant/produit-enfant';

@Component({
  selector: 'app-product-by-ref',
  imports: [ProduitEnfant],
  templateUrl: './product-by-ref.html',
  styleUrl: './product-by-ref.scss',
})
export class ProductByRef {
  ref: string = '';
  product: IProduit | null = null;
  protected productRepository = inject(ProductRepository);

  constructor(route: ActivatedRoute) {
    this.ref = route.snapshot.paramMap.get('ref') ?? '';
    if (this.ref) {
      this.product = this.productRepository.findByRef(this.ref);
    }
  }
}
