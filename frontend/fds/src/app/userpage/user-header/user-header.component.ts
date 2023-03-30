import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  cartItems=0;
  test:boolean=false;
  userName:String="";
  constructor(private foodService:FoodserviceService,private router:Router){}
  ngOnInit(): void {
  let cartData=localStorage.getItem('localCart');
   if(cartData){
    this.cartItems=JSON.parse(cartData).length;
   }
   this.foodService.cartData.subscribe((items)=>{
    this.cartItems=items.length
   })


  //  this.router.events.subscribe((val:any)=>{
  //   if(val.url){
  //     // if(localStorage.getItem('user')){

  //     //   let userStor=localStorage.getItem('user');
  //     //   let usData=userStor&&JSON.parse(userStor);
  //     //   this.userName=usData.user_phone;
  //     // }

  //   }
  //  })
  this.getLogin();
  this. userLogout();
  }

  getLogin(){
    if(localStorage.getItem('user')){

      let useStore=localStorage.getItem('user');
      let useData=useStore && JSON.parse(useStore);
      this.userName=useData.user_phone;
      this.test=true;

    }else{
    }

  }
  userLogout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl("/");
    this.foodService.cartData.emit([]);
  }

}
