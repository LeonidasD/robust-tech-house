import { Product } from './product.model';

export class BillDetail{
  bill_id: string;
  list_item: Product[];
  total_items: number;
  total_price: number;
  paying: number;
  balance: number;
  method: string;
  note: string;
  constructor(list_item:Product[] = [],total_items: number = 0, total_price:number = 0, paying: number = 0, balance: number = 0, method: string = "cash", note: string = ""){
    this.list_item = list_item
    this.total_items = total_items;
    this.total_price = total_price;
    this.paying = paying;
    this.balance = balance;
    this.method = method;
    this.note = note;
  }
}

export class Bill{
  id: string;
  client_role: string;
  create_date: Date;
  constructor(){
    this.id = this.makeid(5);
    this.client_role = 'guest';
  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
