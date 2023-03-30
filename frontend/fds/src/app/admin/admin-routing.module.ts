import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


const routes: Routes = [
  {path:"", component:AdminDeshboardComponent,
children:[
  {path: "**",component:NotFoundComponent},
  {path: "login",component:LoginComponent},
  
  
  
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
