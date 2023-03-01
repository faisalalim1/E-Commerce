import { Component } from '@angular/core';
import { cart, priceSummary } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartData:cart[]|undefined;
  priceSummary:priceSummary={
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
  }
  constructor(private product:ProductService){}

  ngOnInit():void{
    this.product.currentCart().subscribe((result)=>{
      this.cartData = result;
      let price = 0;
      result.forEach((item)=>{
        if(item.quantity){
          price = price + (+ item.price * + item.quantity )
        }
        
      })
      console.log(price);
      this.priceSummary.price = price;
      this.priceSummary.discount = price/10;
      this.priceSummary.tax = price/5;
      this.priceSummary.delivery  =100;
      this.priceSummary.total = price + (price/10)+( price/5)+100;
      console.log(this.priceSummary);
      
      
      
    })
  }


  checkout()
  {

  }

}
