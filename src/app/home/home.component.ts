import { Component } from '@angular/core';

import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private product:ProductService ) {}

  popularProducts:undefined | product[]
  trendyProduct:undefined | product[]

  ngOnInit(): void{
    //Popular products on poster of home page
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProducts = data;
      
    })
    //Trendy products on home page
    this.product.trendyProduct().subscribe((data)=>{
      console.log(data);
      this.trendyProduct = data;
      
    })
  }



}
