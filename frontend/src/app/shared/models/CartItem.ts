import { Item } from "./items";

export class CartItem{
  constructor(public item:Item) {}
  quatity:number = 1;
  price: number = this.item.price;
}
