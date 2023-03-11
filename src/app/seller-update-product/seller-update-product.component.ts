import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  productData: undefined | product;
  productMessage: undefined | string;

  constructor(private route: ActivatedRoute, private product :ProductService, private routes: Router) { }

  ngOnInit(): void{
    let productId= this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId &&  this.product.getProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData = data
      
    })
    

  }

  submit(data: product)
  {
    console.log(data);
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage = 'product has updated'
        this.ngOnInit();
      }
    });
    setTimeout(()=>{
      this.productMessage = undefined;
    },3000)
    
    this.routes.navigate(['/seller-home'])
    
  }
  

}
