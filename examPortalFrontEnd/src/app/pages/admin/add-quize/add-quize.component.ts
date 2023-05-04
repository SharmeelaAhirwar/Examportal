import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizeServiceService } from 'src/app/services/quize-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quize',
  templateUrl: './add-quize.component.html',
  styleUrls: ['./add-quize.component.css']
})
export class AddQuizeComponent implements OnInit {

  category=[{

    cid:0,
    title:''
  }]

  Quiz=

    {

      
      description:'',
      active:false,
      maxMarks:'',
      noOfQuestions:'',
      title:'',
      category:{
        
        cid:0,
        
  
      }
  
  
    }
   

  
  
  constructor(private catSer:CategoryServiceService,private quizSer:QuizeServiceService) { }

  ngOnInit(): void {
    this.catSer.getAllCategories().subscribe((data:any)=>{
      this.category=data;
      console.log(this.category);
      
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','server error','error')
      
    }
    )
  }

  addQuiz(){

    console.log(this.Quiz);
    this.quizSer.addQuize(this.Quiz).subscribe((data:any)=>{
      Swal.fire('Success !!','Quiz added successfully !!','success')
      this.Quiz=

      {
  
        
        description:'',
        active:false,
        maxMarks:'',
        noOfQuestions:'',
        title:'',
        category:{
          
          cid:0,
          
    
        }
    
    
      }

    },
    (error)=>{

      Swal.fire('Error !!','server error','error')
    }
    )
    
    
  
  }

}


