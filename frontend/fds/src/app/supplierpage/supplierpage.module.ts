import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplierHeaderComponent } from './suplier-header/suplier-header.component';
import { SuplierFooterComponent } from './suplier-footer/suplier-footer.component';
import { SuplierDeshboardComponent } from './suplier-deshboard/suplier-deshboard.component';
import { SuplierOrderListComponent } from './suplier-order-list/suplier-order-list.component';
import { RouterModule } from '@angular/router';
import { SuplierHomeComponent } from './suplier-home/suplier-home.component';
import { SuplierSideberComponent } from './suplier-sideber/suplier-sideber.component';




@NgModule({
  declarations: [
    SuplierHeaderComponent,
    SuplierFooterComponent,
    SuplierDeshboardComponent,
    SuplierOrderListComponent,
    SuplierHomeComponent,
    SuplierSideberComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SupplierpageModule { }
