import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductArray } from 'src/app/models/product.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedClient = 'guest';
  products: ProductArray = new ProductArray();
  checkout_products_list: Product[] = new Array();

  constructor(private productService: ProductService) {
    this.productService = productService;

    productService.getProducts().subscribe(
      (data: ProductArray) => {
        this.products = data;
      }
    )
  }

  ngOnInit() {
  }

  addProduct(product: Product){
    let found_product = this.checkout_products_list.find(list_product => list_product == product)
    if(found_product){
      let index = this.checkout_products_list.indexOf(found_product);
      this.checkout_products_list[index].quantity += 1;
    }
    else{
      product.quantity = 1;
      this.checkout_products_list.push(product);
    }
  }

}
