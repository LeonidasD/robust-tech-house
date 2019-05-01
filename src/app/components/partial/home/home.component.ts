import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from 'src/app/services/product.service';
import { Product, ProductArray } from 'src/app/models/product.model';
import { BillDetail, Bill } from 'src/app/models/bill.model';
import { Income } from 'src/app/models/income.model';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductArray = new ProductArray();
  bill: Bill = new Bill();
  bill_list: Bill[] = [];
  income: Income;
  income_list: Income[] = [];
  bill_details: BillDetail = new BillDetail();
  order_history: BillDetail[] = [];
  total_price: number = 0;
  discount: number = 0;
  other_tax: number = 0;
  checkout_products_list: Product[];

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    if(JSON.parse(localStorage.getItem('bill-list'))){
      this.order_history = JSON.parse(localStorage.getItem('order-history'));
      this.bill_list = JSON.parse(localStorage.getItem('bill-list'));
      this.income_list = JSON.parse(localStorage.getItem('income-list'));
    }
    this.productService = productService;
    this.checkout_products_list = new Array();
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
      this.total_price += this.checkout_products_list[index].price;
    }
    else{
      product.quantity = 1;
      this.total_price += product.price;
      this.checkout_products_list.push(product);
    }
  }

  createBill(){
    if(!this.bill_details.paying || this.checkout_products_list.length <= 0){
      Swal.fire({
        title: 'Checkout Failed',
        text: 'Paying or Product required!',
        type: 'error',
        showConfirmButton: false,
      })
    }
    else{
      this.productService.createBill(this.bill, this.bill_details, this.income, this.income_list, this.bill_list, this.order_history, this.checkout_products_list, this.total_price);

      this.bill = new Bill();
      this.bill_details = new BillDetail();
      this.total_price, this.other_tax, this.discount = 0;
      this.checkout_products_list = [];

      this.order_history = JSON.parse(localStorage.getItem('order-history'));
      this.bill_list = JSON.parse(localStorage.getItem('bill-list'));
      this.income_list = JSON.parse(localStorage.getItem('income-list'));
    }
  }

  cancelBill(){
    this.bill = new Bill();
    this.bill_details = new BillDetail();
    this.total_price, this.other_tax, this.discount = 0;
    this.checkout_products_list = [];
  }
}
