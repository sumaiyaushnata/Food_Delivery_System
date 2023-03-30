import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../Entity/cart';
import { Food } from '../Entity/food';
import { User } from '../Entity/User';
import { FoodserviceService } from '../service/foodservice.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(public userService: UserService, private router:Router,private foodService:FoodserviceService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      user_firstName: new FormControl(''),
      user_lastName: new FormControl(''),
      user_phone: new FormControl(''),
      user_address: new FormControl(''),
      user_password: new FormControl('')
    });
  }
  submit1(data:User){
    let userData=[];
    let localUser=localStorage.getItem('user')
    this.userService.addUser(data).subscribe((result) => {
      console.warn(result);
  })
  if(!localUser){
    localStorage.setItem('user',JSON.stringify([data]));
  }else{
    //console.warn("you already have data")
    userData=JSON.parse(localUser);
    userData.push(data);
    localStorage.setItem('user',JSON.stringify(userData));
    
  }
}
submit(){
  let userData=[];
    let localUser=localStorage.getItem('user')
  console.log(this.form.value);
  this.userService.addUser(this.form.value).subscribe((res:any) => {
       console.warn('Post created successfully!');
      //  
      if(res){
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigateByUrl("/");
      }
      this.localCartToRemoteCart();
      
  })
}

get f(){
  return this.form.controls;
}

localCartToRemoteCart(){
  let data=localStorage.getItem('localCart');
  let user=localStorage.getItem('user');
  let userId=user && JSON.parse(user).id;
  if(data){
    let cartDataList:Food[]=JSON.parse(data);
    
    cartDataList.forEach((food:Food,index:any)=>{
     let cartData:Cart={
      ...food,
      foodId:food.id,
      userId,

     } 
     delete cartData.id;
     this.foodService.addToCart(cartData).subscribe((result)=>{
      if(result){
        console.warn("Item stored in Db");
        console.warn("Item stored in Db",result);

      }
     })
     if(cartDataList.length===index+1){
      localStorage.removeItem('localCart');
     }
    })
  }
  this.foodService.getCardFoodList(userId)
  
 }
}
