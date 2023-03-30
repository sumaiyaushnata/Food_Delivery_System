import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entity/category';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-view-catagory-list',
  templateUrl: './view-catagory-list.component.html',
  styleUrls: ['./view-catagory-list.component.css']
})
export class ViewCatagoryListComponent implements OnInit {
  categoryList:undefined| Category[]
constructor(private category:CategoryserviceService){}
  ngOnInit(): void {
    this.category.categoryList().subscribe((result)=>{
      console.warn(result);
      this.categoryList=result;
    })
  
}

}
