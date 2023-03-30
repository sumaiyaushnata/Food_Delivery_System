import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginComponent } from './login/login.component';

import { UserHeaderComponent } from './userpage/user-header/user-header.component';
import { UserFooterComponent } from './userpage/user-footer/user-footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './userpage/cart-page/cart-page.component';
import { CheckOutComponent } from './userpage/check-out/check-out.component';
import { MyOrdersComponent } from './userpage/my-orders/my-orders.component';
import { NormalpageComponent } from './normalpage/normalpage.component';
import { UserBodyComponent } from './userpage/user-body/user-body.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ViewpageModule } from './viewpage/viewpage.module';
import { UserContactComponent } from './userpage/user-contact/user-contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { SupplierpageModule } from './supplierpage/supplierpage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodDetailsComponent } from './userpage/food-details/food-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    LoginComponent,
   
    UserHeaderComponent,
    UserFooterComponent,
    NotFoundComponent,
    CartPageComponent,
    CheckOutComponent,
    MyOrdersComponent,
    NormalpageComponent,
    UserBodyComponent,
    UserContactComponent,
    RegistrationComponent,
    FoodDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AdminRoutingModule,
    ViewpageModule,
    SupplierpageModule,
    FormsModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
