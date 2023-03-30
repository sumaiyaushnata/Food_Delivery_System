import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/Entity/cart';

import { Food } from 'src/app/Entity/food';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit{
  id!:number
  foodData:undefined| Food;
  foodQuantity:number=1;
  removeCart=false;
 
  constructor(private activeRoute:ActivatedRoute, private foodService:FoodserviceService) { }
  ngOnInit(): void {
    let foodId= this.activeRoute.snapshot.paramMap.get('foodId');
    console.warn(foodId+"gggg");

    foodId && this.foodService.getFood(foodId).subscribe((result)=>{
      console.warn(result+"syst")
      this.foodData=result;

      let cartData=localStorage.getItem('localCart');
      if(foodId && cartData){
        let items=JSON.parse(cartData );
        items=items.filter((item:Food)=>foodId===item.id?.toString())
        console.warn('items',items)
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
//problem ace------------6line
        let user=localStorage.getItem('user');
       if(user){
        let userId=user && JSON.parse(user).id;
        this.foodService.getCardFoodList(userId);
        this.foodService.cartData.subscribe((result)=>{
        let item=  result.filter((item:Food)=>foodId?.toString()===item.id.toString());
      if(item.length)  {
        // this.cartData=item[0];
        this.removeCart=true;
      }
      
      })
       }
  }

    })
  



  }

  handleQuantity(val:string){
    if(this.foodQuantity<20 && val==='plus'){
      this.foodQuantity+=1;
    }else if(this.foodQuantity>1 && val==='min'){
      this.foodQuantity-=1;
    }
  }

  addToCart(){
    if(this.foodData){
      this.foodData.quantity = this.foodQuantity;
     // console.warn(this.foodData);
      if(!localStorage.getItem('user')){
        this.foodService.localAddToCart(this.foodData);
        this.removeCart=true

      }else{
        console.warn("user login")
        let user=localStorage.getItem('user');
        let userId=user && JSON.parse(user).id
        console.warn(userId);
        let cartData:Cart={
          ...this.foodData,
          userId,
          foodId:this.foodData.id

        }
        delete cartData.id;
        console.warn(cartData);
        this.foodService.addToCart(cartData).subscribe((result)=>{
          console.warn('result',result)
          if(result){
            this.foodService.getCardFoodList(userId);
            this.removeCart=true;
          }
        })
      }
     
      
      
       }
       
 }

 removeToCart(foodId:number){
  this.foodService.removeItemsFromCart(foodId)
  this.removeCart=false

 }


}
