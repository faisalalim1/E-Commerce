import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {

  constructor(private product: ProductService ){}

  submit(data: object) {
    console.log(data);
    this.product.addProduct
  }
}
