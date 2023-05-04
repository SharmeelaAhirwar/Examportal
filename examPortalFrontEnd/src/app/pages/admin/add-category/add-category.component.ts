import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    "title":'',
    "description":''
  }

  constructor(private snack:MatSnackBar,private categorySer:CategoryServiceService) { }

  ngOnInit(): void {
  }
  submitform(){

    if(this.category.title.trim()=='' || this.category.title==null)
    {
      this.snack.open("tittle required !!",'',{
        duration:3000,
      });
      return;
    }
    
    
    console.log(this.category);

    //calling-service

    this.categorySer.addCategory(this.category).subscribe((data:any)=>{
      this.category.title='',
      this.category.description=''
      Swal.fire('succcess','category added successfully!!','success')
    },
    (error)=>{

      Swal.fire('Error !!','server error','error')
    }
    );
    
  }

}
