import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDeshboardComponent } from './admin/admin-deshboard/admin-deshboard.component';
import { LoginComponent } from './login/login.component';
import { NormalpageComponent } from './normalpage/normalpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuplierDeshboardComponent } from './supplierpage/suplier-deshboard/suplier-deshboard.component';
import { SuplierHomeComponent } from './supplierpage/suplier-home/suplier-home.component';
import { SuplierOrderListComponent } from './supplierpage/suplier-order-list/suplier-order-list.component';
import { CartPageComponent } from './userpage/cart-page/cart-page.component';
import { CheckOutComponent } from './userpage/check-out/check-out.component';
import { FoodDetailsComponent } from './userpage/food-details/food-details.component';
import { MyOrdersComponent } from './userpage/my-orders/my-orders.component';
import { UserContactComponent } from './userpage/user-contact/user-contact.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AboutComponent } from './viewpage/about/about.component';
import { ContactComponent } from './viewpage/contact/contact.component';
import { ViewAddCategoryComponent } from './viewpage/view-add-category/view-add-category.component';
import { ViewAddFoodComponent } from './viewpage/view-add-food/view-add-food.component';
import { ViewAddResturantComponent } from './viewpage/view-add-resturant/view-add-resturant.component';
import { ViewCatagoryListComponent } from './viewpage/view-catagory-list/view-catagory-list.component';
import { ViewFoodListComponent } from './viewpage/view-food-list/view-food-list.component';
import { ViewHomeComponent } from './viewpage/view-home/view-home.component';
import { ViewOrderListComponent } from './viewpage/view-order-list/view-order-list.component';
import { ViewResturantListComponent } from './viewpage/view-resturant-list/view-resturant-list.component';
import { ViewTotalCustomerComponent } from './viewpage/view-total-customer/view-total-customer.component';
import { ViewdeshboardComponent } from './viewpage/viewdeshboard/viewdeshboard.component';


const routes: Routes = [
  {path:"",component:UserpageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"cart-page",component:CartPageComponent},
  {path:"my-order",component:MyOrdersComponent},
  {path:"check-out",component:CheckOutComponent},
  {path:"user-contact",component:UserContactComponent},
  {path:"details/:foodId",component:FoodDetailsComponent},

  {path:"admin", loadChildren:()=> import('./admin/admin.module').then((m)=>m.AdminModule)},
//   {path:"normal", component:NormalpageComponent,
// children:[
//   {path:"login",component:LoginComponent},
//   {path:"cart-page",component:CartPageComponent},
//   {path:"my-order",component:MyOrdersComponent},
//   {path:"check-out",component:CheckOutComponent},
  
// ]},
{path:"view",component:ViewdeshboardComponent,children:[
 {
  path:"about",component:AboutComponent
 },
 { path:"contact",component:ContactComponent},
 { path:"",component:ViewHomeComponent},
 { path:"add-category",component:ViewAddCategoryComponent},
 { path:"view-category",component:ViewCatagoryListComponent},
 { path:"add-food",component:ViewAddFoodComponent},
 { path:"view-food",component:ViewFoodListComponent},
 { path:"add-resturant",component:ViewAddResturantComponent},
 { path:"view-resturant",component:ViewResturantListComponent},
 { path:"view-order",component:ViewOrderListComponent},
 { path:"view-customer",component:ViewTotalCustomerComponent},
]},
{path:"supplier",component:SuplierDeshboardComponent,children:[
  {path:"", component:SuplierHomeComponent},
  {path:"sup-order", component:SuplierOrderListComponent},
  {path:"sup-add-food", component:ViewAddFoodComponent},
  {path:"sup-view-food", component:ViewFoodListComponent},
]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
