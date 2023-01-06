import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';

const routes: Routes = [
  // seems like mention to have home component main one when goes to localhost:4200
  {path:'', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'item/:id', component:ItemPageComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
