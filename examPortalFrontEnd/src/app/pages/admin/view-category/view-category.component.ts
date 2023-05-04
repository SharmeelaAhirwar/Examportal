import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories=[
    {
      "cid":'',
      "tittle":'',
      "description":''
    }
  
  ]

  constructor( private categorySer:CategoryServiceService) { }

  ngOnInit(): void {

    this.categorySer.getAllCategories().subscribe((data:any)=>{
      this.categories=data;
      console.log("cat",this.categories);
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!! ','error in server','error')
      

    }
    )
    
  }

}
