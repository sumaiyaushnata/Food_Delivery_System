import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Entity/order';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  orderData:Order[]|undefined
constructor(private foodService:FoodserviceService){}
  ngOnInit(): void {
    this.foodService.getOrderList().subscribe((result)=>{
      this.orderData=result;
    })
    
  }
}
