import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cart } from '../Entity/cart';
import { Food } from '../Entity/food';
import { User } from '../Entity/User';
import { FoodserviceService } from '../service/foodservice.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserService, private router:Router,private foodService:FoodserviceService
    ){}
 ngOnInit(): void {
  
   
 }
 login(data:User){
  this.userService.userLogin(data);
 

 }
 localCartToRemoteCart(){
  let data=localStorage.getItem('localCart');
  if(data){
    let cartDataList=JSON.parse(data);
    let user=localStorage.getItem('user');
    let userId=user && JSON.parse(user).id;
    cartDataList.forEach((food:Food,index:any)=>{
     let cartData:Cart={
      ...food,
      foodId:food.id,
      userId,

     } 
     delete cartData.id;
     this.foodService.addToCart(cartData).subscribe((result)=>{
      if(result){
        console.warn("Item stored in Db")
      }
     })
     if(cartDataList.length===index+1){
      localStorage.removeItem('localCart');
     }
    })
  }
 }
}
