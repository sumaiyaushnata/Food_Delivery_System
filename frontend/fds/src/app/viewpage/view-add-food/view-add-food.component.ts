import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entity/category';
import { Food } from 'src/app/Entity/food';
import { FoodserviceService } from 'src/app/service/foodservice.service';

@Component({
  selector: 'app-view-add-food',
  templateUrl: './view-add-food.component.html',
  styleUrls: ['./view-add-food.component.css']
})
export class ViewAddFoodComponent implements OnInit{
  catagoryNameList!: Category[];
  catList!: Category[];
  constructor(public foodService: FoodserviceService){}

  ngOnInit(): void {

this.catelist()

    this.foodService.categoryName().subscribe((data)=>{
      this.catagoryNameList= data;
    })


  }

catelist(){
  this.foodService.categoryName().subscribe((data:Category[])=>{
    this.catList=data;
  })
}

  submit(data:Food){
    this.foodService.addFood(data).subscribe((result) => {
      console.warn(result);
      alert("Food details are saved");
  })

}
}
