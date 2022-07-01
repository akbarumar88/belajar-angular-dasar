import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: Product | undefined;

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  validateAddToCart(product: Product) {
    let currentCart = this.cartService.getItems();
    let found = currentCart.find((el) => el.id == product.id);
    if (found) {
      window.alert(
        'Barang ini sudah ada di keranjang, harap pilih barang yang lain.'
      );
      return;
    }
    // Barang belum ada di keranjang, tambahkan ke keranjang
    this.addToCart(product);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
