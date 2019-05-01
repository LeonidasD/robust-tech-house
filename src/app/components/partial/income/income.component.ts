import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { pipe } from '@angular/core/src/render3';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  day: number;
  month: number;
  year: number;
  day_bill_list = [];
  month_bill_list = [];
  year_bill_list = [];
  income_day: number = 0;
  income_month: number = 0;
  income_year: number = 0;
  bill_list = JSON.parse(localStorage.getItem('bill-list'));
  order_history = JSON.parse(localStorage.getItem('order-history'));

  constructor() {

  }

  ngOnInit() {
  }

  findIncome(event: MatDatepickerInputEvent<Date>){
    this.day = event.value.getDate();
    this.month = event.value.getMonth() + 1;
    this.year = event.value.getFullYear();

    this.income_day = this.income_month = this.income_year = 0;

    this.bill_list.forEach(obj => {
      let getDay = new Date(obj.create_date).getDate();
      let getMonth = new Date(obj.create_date).getMonth()+1;
      let getYear = new Date(obj.create_date).getFullYear();
      if(getDay == this.day)
        this.day_bill_list.push({"day": getDay, "id": obj.id });
      if(getMonth == this.month)
        this.month_bill_list.push({"month": getMonth, "id": obj.id });
      if(getYear == this.year)
        this.year_bill_list.push({"year": getYear, "id": obj.id});
    })

    this.day_bill_list.forEach(obj =>{
      this.income_day += this.order_history.find(order => order.bill_id == obj.id).total_price;
    })
    this.month_bill_list.forEach(obj =>{
      this.income_month += this.order_history.find(order => order.bill_id == obj.id).total_price;
    })
    this.year_bill_list.forEach(obj =>{
      this.income_year += this.order_history.find(order => order.bill_id == obj.id).total_price;
    })
    console.log("Day" + this.income_day);
    console.log("Month" + this.income_month);
    console.log("Year" + this.income_year);
  }
}
