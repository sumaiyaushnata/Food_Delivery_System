import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Entity/cart';
import { PriceSummery } from 'src/app/Entity/priceSummery';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  coupenCodeForm!: FormGroup;
couponCodeValue!:string;

  priceSummery:PriceSummery={
  price:0,
  discount:0,
  tax:0,
  delivery:0,
  total:0
  }
  cartData:Cart[]|undefined;
  discount:number=this.priceSummery.discount;
  
  constructor(private foodService:FoodserviceService,private router:Router){}
 ngOnInit(): void {



  this.coupenCodeForm = new FormGroup({
    couponCode: new FormControl(''),
    
  });



  this.loadDetals();
  
   
}

loadDetals(){
  this.foodService.currentCart().subscribe((result)=>{
    console.warn(result);
    this.cartData=result;
    let price=0;
    // let discount=0;
    result.forEach((item:any)=>{
     
      // price=price+ +(item.price* +item.quantity);
      price=price+ +item.price;
      // discount=discount+ +this.priceSummery.discount;
  
   }
  
    )
      
      
      this.priceSummery.price = price;
  this.priceSummery.discount =this.discount ;
  this.priceSummery.tax = price / 5;
  this.priceSummery.delivery = 100;
  this.priceSummery.total = price + (price/5)+ 100 -this.priceSummery.discount;
  if(!this.cartData.length){
    this.router.navigate(['/'])
  }
    
  })
}
checkout() {
  this.router.navigate(['/check-out'])
}
applyCoupon(){
  
  if(this.coupenCodeForm.value.couponCode=="spr"){
    this.priceSummery.discount=(this.priceSummery.total*10)/100
    this.foodService.currentCart().subscribe((result)=>{
      console.warn(result);
      this.cartData=result;
      let price=0;
      // let discount=0;
      result.forEach((item:any)=>{
       
        // price=price+ +(item.price* +item.quantity);
        price=price+ +item.price;
        // discount=discount+ +this.priceSummery.discount;
    
     }
    
      )
        
        
        this.priceSummery.price = price;
    this.priceSummery.discount =this.priceSummery.discount ;
    this.priceSummery.tax = price / 5;
    this.priceSummery.delivery = 100;
    this.priceSummery.total = price + (price/5)+ 100 -this.priceSummery.discount;
    if(!this.cartData.length){
      this.router.navigate(['/'])
    }
      
    })

  }else if(this.coupenCodeForm.value.couponCode=="food3"){
    this.priceSummery.discount=(this.priceSummery.total*5)/100
    
    console.log("price discount:",this.priceSummery.discount);
    this.foodService.currentCart().subscribe((result)=>{
      console.warn(result);
      this.cartData=result;
      let price=0;
      // let discount=0;
      result.forEach((item:any)=>{
       
        // price=price+ +(item.price* +item.quantity);
        price=price+ +item.price;
        // discount=discount+ +this.priceSummery.discount;
    
     }
    
      )
        
        
        this.priceSummery.price = price;
    this.priceSummery.discount =this.priceSummery.discount ;
    this.priceSummery.tax = price / 5;
    this.priceSummery.delivery = 100;
    this.priceSummery.total = price + (price/5)+ 100 -this.priceSummery.discount;
    if(!this.cartData.length){
      this.router.navigate(['/'])
    }
      
    })

  }else{
    alert(" Invalid Coupon")

  }
}

 } 

