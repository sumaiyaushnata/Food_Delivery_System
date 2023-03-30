import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Entity/cart';
import { Order } from 'src/app/Entity/order';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  
  totalPrice: number | undefined;
  cartData: Cart[] | undefined;
  orderMsg: string | undefined;
  constructor(private foodService: FoodserviceService, private router: Router) { }

  ngOnInit(): void {
    this.foodService.currentCart().subscribe((result)=>{
      
      let price=0;
      let discount=0;
      result.forEach((item:any)=>{
       
        // price=price+ +(item.price* +item.quantity);
        price=price+ +item.price;
        discount=discount+ +item.discount;
    
     }
    
      )
        
        
        this.totalPrice=price + (price/5)+ 100 - discount;
  
  })
}
orderNow(data:Order) {
  console.log(data);
  let user = localStorage.getItem('user');
  let userId = user && JSON.parse(user).id;
  if (this.totalPrice) {
    let orderData: Order = {
      ...data,
      totalPrice: this.totalPrice,
      userId,
      state:'in',
     
    }
this.foodService.orderNow(orderData).subscribe((result)=>{
  if(result){
    alert("Order has been placed");
    this.router.navigate(['/my-order']);
  }
})
}

}
}
