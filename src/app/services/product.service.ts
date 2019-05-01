import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductArray } from '../models/product.model';
import { AppConst } from '../const/constant';
import { Income } from '../models/income.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsURL: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.productsURL = AppConst.products;
  }

  getProducts(){
    return this.http.get<ProductArray>(this.productsURL);
  }

  createBill(bill, bill_details, income, income_list, bill_list, order_history, checkout_products_list, total_price){
    bill_details.bill_id = bill.id;
    bill_details.list_item = checkout_products_list;
    bill_details.total_items = checkout_products_list.length;
    bill_details.total_price = total_price;
    bill_details.balance =  bill_details.paying - bill_details.total_price;
    let date: Date = new Date();
    bill.create_date = date;
    income = new Income(bill_details.total_price, date);
    income_list.push(income);
    bill_list.push(bill);
    order_history.push(bill_details);

    // save to localstorage
    localStorage.setItem('bill-list',  JSON.stringify(bill_list));
    localStorage.setItem('order-history', JSON.stringify(order_history));
    localStorage.setItem('income-list', JSON.stringify(income_list));

    Swal.fire({
      title: 'Checkout Success',
      text: 'Your bill is created, Bill ID: ' + bill_details.bill_id,
      type: 'success',
      showConfirmButton: false,
      timer: 1000
    }).then(() => {
      this.router.navigate(['/']);
    })
  }
}
