import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {

  addProductMessage: string | undefined;
  routes: any;
  constructor(private product: ProductService , private routess: Router ){}

  submit(data: product) {
    console.log(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
     
      if(result){
        this.addProductMessage = "Product added successfully"
      }
      setTimeout(()=>(this.addProductMessage = undefined), 3000);
      this.routess.navigate(['/seller-home'])
      
      
      
    })
  }
}
