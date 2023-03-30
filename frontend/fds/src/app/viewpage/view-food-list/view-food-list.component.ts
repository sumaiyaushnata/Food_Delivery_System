import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/Entity/food';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-view-food-list',
  templateUrl: './view-food-list.component.html',
  styleUrls: ['./view-food-list.component.css']
})
export class ViewFoodListComponent implements OnInit{
  foodList:undefined| Food[]
constructor(private food:FoodserviceService){}

  ngOnInit(): void {
    this.food.foodList().subscribe((result)=>{
      console.warn(result);
      this.foodList=result;
    })
  
}

}
