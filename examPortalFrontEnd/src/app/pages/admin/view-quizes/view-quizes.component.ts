import { Component, OnInit } from '@angular/core';
import { QuizeServiceService } from 'src/app/services/quize-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {
  Quiz=[

    {

      qid:0,
      description:'',
      active:false,
      maxMarks:'',
      noOfQuestions:'',
      title:'',
      category:{
        
        cid:0,
        title:'',
        description:''
  
      }
  
  
    }
   

  ]
  

  constructor(private quizSer:QuizeServiceService) { }

  ngOnInit(): void {
    this.quizSer.getAllQuizes().subscribe((data:any)=>{
      this.Quiz=data;
      console.log(this.Quiz);
      
    },

    (error)=>{
      console.log(error);
      Swal.fire("Error !!",'server error','error')
      
    }
    )

    
  }
  delete(qid:number){
    Swal.fire({
      icon:'warning',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true

    }).then((result)=>{
      if(result.isConfirmed){
        console.log("qid",qid);
    this.quizSer.deleteQuiz(qid).subscribe((data)=>{
      this.Quiz==this.Quiz.filter((quizes)=>quizes.qid!=qid)
      Swal.fire('Success !!','Deleted Successfully!!','success')
    },
    (error)=>{

      console.log(error);
      Swal.fire('Error !!','server error !!','error')
      
    }
    )
      }
    })
    

  }

}

 