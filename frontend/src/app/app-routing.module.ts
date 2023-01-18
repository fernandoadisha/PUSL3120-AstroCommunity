import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AddItemsPageComponent } from './components/pages/add-items-page/add-items-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  // seems like mention to have home component main one when goes to localhost:4200
  {path:'', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'item/:id', component:ItemPageComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path: 'checkout', component:CheckoutPageComponent, canActivate:[AuthGuard]},
  {path: 'payment', component:PaymentPageComponent, canActivate:[AuthGuard]},
  {path: 'track/:orderId', component:OrderTrackPageComponent, canActivate:[AuthGuard]},
  {path: 'additem', component:AddItemsPageComponent, canActivate:[AuthGuard]},
  {path: 'chat', component:ChatPageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
