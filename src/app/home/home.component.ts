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

  ngOnInit(): void{
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProducts = data;
      
    })
  }



}
