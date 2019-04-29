import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductArray } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = 'assets/products.json';
  constructor(private http: HttpClient) {
  }

  getProducts(){
    return this.http.get<ProductArray>(this.productsUrl);
  }
}
