import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];

  addToCart(product: Product) {
    this.items = [...this.items, product]; // ES6 way
    // this.items.push(product) Ini Cara Lama
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
