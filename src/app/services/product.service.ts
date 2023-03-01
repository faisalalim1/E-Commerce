import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<product[] | []>();
  constructor(private http: HttpClient) { }

//Adding product api

  addProduct(data: product)
  {
    console.log("service called");
   return this.http.post('http://localhost:3000/products', data);  
  }

 // showing product list

  productList()
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  //Delete product api
  deleteProduct(id: number)
  {
   return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  //Get product api
  getProduct(id: string)
  {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  //Update product api
  updateProduct(product:product)
  {
   return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product);
  }

  popularProducts()
  {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=7');
  }

  trendyProduct()
  {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=20');
  }


  // Query search for the product
  searchProduct(query:string)
  {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }

  // ADD to cart service
  localAddToCart(data:product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart')
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    }else{
      cartData = JSON.parse(localCart);
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData));
      
    }
    this.cartData.emit(cartData);
  }


  // remove to cart service

  removeItemFromCart(productId:number)
  {
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let item: product[] = JSON.parse(cartData);
      item = item.filter((item:product)=>productId !== item.id)
      localStorage.setItem('localCart', JSON.stringify(item));
      this.cartData.emit(item);
      
    }
  }

  // product added to the cart api
  addToCart(cartData:cart){
    return this.http.post('http://localhost:3000/cart',cartData);
  }

  // get list of product from cartlist
  getCartList(userId: number) {
    return this.http
      .get<product[]>('http://localhost:3000/cart?userId='+ userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  removeToCart(cartId:number)
  {
    return this.http.delete('http://localhost:3000/cart/'+cartId);
  }


  currentCart()
  {
    let userStrore = localStorage.getItem('user');
    let userData = userStrore && JSON.parse(userStrore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userData.id);
  }




}
