import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Item } from '../shared/models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart  = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(item: Item): void {
    let cartItem = this.cart.items.find(citem => citem.item.id === item.id)
    if(cartItem) {
      return;
    }

    this.cart.items.push(new CartItem(item));
    this.setCartToLocalStorage();
  }

removeFromCart(itemId: string):void {
  this.cart.items = this.cart.items.filter(citem => citem.item.id != itemId);
  this.setCartToLocalStorage();
}

changeQuantity(itemId: string, quantity: number) {
 let cartItem = this.cart.items.find(citem => citem.item.id === itemId);
 if(!cartItem) {return;}

  cartItem.quantity = quantity;
  cartItem.price = cartItem.price * quantity;

  this.setCartToLocalStorage();

}

clearCart() {
 this.cart = new Cart();
 this.setCartToLocalStorage();
}

getCartObservable():Observable<Cart> {
  return this.cartSubject.asObservable();

}

getCart():Cart {
  return this.cartSubject.value;
}

// In a refreshing page situation all the data in the cart can be lost
// To solve this we can use local storage to save data
// this way we can access them even after a refresh
private setCartToLocalStorage(): void {
  //calculating total price and count
  this.cart.totalPrice = this.cart.items
  .reduce((prevSum, currentItem) =>prevSum +currentItem.price, 0)

  this.cart.totalCount = this.cart.items
  .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

  const cartJson = JSON.stringify(this.cart);
  localStorage.setItem('Cart', cartJson);
  this.cartSubject.next(this.cart);
}

private getCartFromLocalStorage():Cart {
  const cartJson = localStorage.getItem('Cart');
  return cartJson? JSON.parse(cartJson): new Cart();
}

}
