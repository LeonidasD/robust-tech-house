export class Product{
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

export class ProductArray{
  message: string;
  result: Product[];
  constructor(){
    this.result = [];
  }
}
