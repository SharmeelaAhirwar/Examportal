import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { start } from 'repl';
import { QuizeServiceService } from 'src/app/services/quize-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-instruction',
  templateUrl: './exam-instruction.component.html',
  styleUrls: ['./exam-instruction.component.css']
})
export class ExamInstructionComponent implements OnInit {
qid:number=0;
Quiz:any;
  constructor(private activatedRoute:ActivatedRoute,private quizSer:QuizeServiceService,private router:Router) { }

  ngOnInit(): void {
    this.qid=this.activatedRoute.snapshot.params['quizId']
    console.log(this.qid);

    this.quizSer.getQuizById(this.qid).subscribe((data)=>{
      this.Quiz=data;
      console.log("QUiz",this.Quiz);
      
    },
    (error)=>{
      console.log(error);
      
    }
    )

    
    

  }
  startQuiz(){
    Swal.fire({
      title:'Do you want to start the quiz',
      showCancelButton:true,
      confirmButtonText:'start',
      denyButtonText:'Dont save',
      icon:'info'

    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.router.navigate(['/starting-exam/'+this.qid])
      }
      else if(result.isDenied){
        Swal.fire('Changes are not saved','','info')

      }
    })
  }

}
