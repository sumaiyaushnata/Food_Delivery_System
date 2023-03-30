import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entity/category';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-view-add-category',
  templateUrl: './view-add-category.component.html',
  styleUrls: ['./view-add-category.component.css']
})
export class ViewAddCategoryComponent implements OnInit{
constructor(public categoryService: CategoryserviceService){}

  ngOnInit(): void {}
  submit(data:Category){
    this.categoryService.addCategory(data).subscribe((result) => {
      console.warn(result);
  })
}
}
