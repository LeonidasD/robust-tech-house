export class Product{
  private name: string;
  private price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export class ProductArray{
  private message: string;
  private result: Product[];
  constructor(){
    this.result = [];
  }
}
