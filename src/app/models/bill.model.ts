export class Bill{
  private bill_id: number;
  private total_items: number;
  private total_price: number;
  private paying: number;
  private balance: number;
  private method: string;
  private note: string;
  constructor(total_items: number, total_price:number, paying: number, balance: number, method: string, note: string){
    this.total_items = total_items;
    this.total_price = total_price;
    this.paying = paying;
    this.balance = balance;
    this.method = method;
    this.note = note;
  }
}
