import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  persons = [
    {name: 'Akbar Umar', age: 20},
    {name: 'M Saif Alikhan', age: 21},
    {name: 'Andhika Ahmad Ramadhan', age: 22},
  ]

  share(e: any = {}) {
    console.log(e);
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
