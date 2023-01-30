import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {

  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor (cartService: CartService, private formBuilder: FormBuilder, private userService: UserService, private orderService:OrderService, private router:Router) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit():void {
    let {name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if(this.checkoutForm.invalid) {
      alert("Please fill all inputs");
      return;
    }

    if(!this.order.addressLatLng) {
      alert("Please Select your location on the map");
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;


    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      }, error:(errorResponse) => {
        alert("Error popped while navigating: " + errorResponse.error);
      }
    })
    //console.log(this.order);
  }

}
