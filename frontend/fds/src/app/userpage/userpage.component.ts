import { Component, OnInit } from '@angular/core';
import { Food } from '../Entity/food';
import { FoodserviceService } from '../service/foodservice.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  
 cardFoodList:undefined | Food[];
  constructor(private food:FoodserviceService) {}

  ngOnInit(): void {
    this.food.cardFoodList().subscribe((data)=>{
      console.warn(data);
      this.cardFoodList=data;
    })

   
    
  }
}
