import { Component, computed, signal } from '@angular/core';
import { IProduit } from '../../interfaces/IProduit';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-tp-panier',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './tp-panier.html',
  styleUrl: './tp-panier.scss',
})
export class TpPanier {
  protected readonly discountThreshold = 50;
  protected readonly discountRate = 0.1;

  protected products: IProduit[] = [
    { ref: 'p1', label: 'Clavier USB', price: 29.99, category: 'informatique' },
    { ref: 'p2', label: 'Souris sans fil', price: 19.5, category: 'informatique' },
    { ref: 'p3', label: 'Tapis de souris', price: 9.99, category: 'informatique' },
  ];

  protected cart = this.products.map((p) => {
    const quantity = signal(0);
    return {
      product: p,
      quantity,
      subtotal: computed(() => p.price * quantity()),
    };
  });

  protected total = computed(() => this.cart.reduce((sum, c) => sum + c.subtotal(), 0));

  protected hasDiscount = computed(() => this.total() > this.discountThreshold);

  protected totalAfterDiscount = computed(() =>
    this.hasDiscount() ? this.total() * (1 - this.discountRate) : this.total(),
  );

  protected updateCart(index: number, action: '+' | '-') {
    const line = this.cart[index];
    if (!line) return;
    if (action === '+') line.quantity.set(line.quantity() + 1);
    else line.quantity.set(Math.max(0, line.quantity() - 1));
  }
}
