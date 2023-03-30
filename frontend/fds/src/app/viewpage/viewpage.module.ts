import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ViewdeshboardComponent } from './viewdeshboard/viewdeshboard.component';


import { ViewFooterComponent } from './view-footer/view-footer.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { RouterModule } from '@angular/router';
import { ViewSidebarComponent } from './view-sidebar/view-sidebar.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewTotalCustomerComponent } from './view-total-customer/view-total-customer.component';
import { ViewCatagoryListComponent } from './view-catagory-list/view-catagory-list.component';
import { ViewFoodListComponent } from './view-food-list/view-food-list.component';
import { ViewResturantListComponent } from './view-resturant-list/view-resturant-list.component';
import { ViewOrderListComponent } from './view-order-list/view-order-list.component';
import { ViewAddCategoryComponent } from './view-add-category/view-add-category.component';
import { ViewAddFoodComponent } from './view-add-food/view-add-food.component';
import { ViewAddResturantComponent } from './view-add-resturant/view-add-resturant.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ViewdeshboardComponent,
   
   
    ViewFooterComponent,
    ViewHeaderComponent,
    ViewSidebarComponent,
    ViewHomeComponent,
    ViewTotalCustomerComponent,
    ViewCatagoryListComponent,
    ViewFoodListComponent,
    ViewResturantListComponent,
    ViewOrderListComponent,
    ViewAddCategoryComponent,
    ViewAddFoodComponent,
    ViewAddResturantComponent
  ],
  imports: [
    CommonModule,
    RouterModule,FormsModule
  ]
})
export class ViewpageModule { }
