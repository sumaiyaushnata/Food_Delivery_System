import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Entity/order';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-view-order-list',
  templateUrl: './view-order-list.component.html',
  styleUrls: ['./view-order-list.component.css']
})
export class ViewOrderListComponent implements OnInit{
  id!:number;
  orderList!: Order[]
constructor(private food:FoodserviceService){}

  ngOnInit(): void {
    this.food.getAllOrder().subscribe((result)=>{
      console.warn(result);
      this.orderList=result;
    })

  // this.cancelOrder(this.id);
  
} 

approvedData(id:number){
  return this.food.updateStatus(id,'Odering').subscribe((result)=>{
    this.ngOnInit();
    console.log("hit udatemethod");
  })

}
cancelOrder(id:number){
  alert("oder deleted")
  this.ngOnInit();
  return this.food.cancelOrder(id);
 
}



}
