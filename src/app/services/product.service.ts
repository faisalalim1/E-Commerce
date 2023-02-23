import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
}
