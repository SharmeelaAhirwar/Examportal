import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { QueastionServiceService } from 'src/app/services/queastion-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  constructor(private loactionSt:LocationStrategy,
    private activatedRoute:ActivatedRoute,
    private queSer:QueastionServiceService
    ) { }

    Queastion:any;
    marksGot=0;
    correctAnswer=0;
    attempted=0;
    isSubmit=false;
    timer:any;

qid:number=0;
  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this.activatedRoute.snapshot.params['quizId'];
    this.queSer.getAllQueastionByQuizId(this.qid).subscribe((data)=>{
      this.Queastion=data;
      // console.log("data",data);
      this.timer=this.Queastion.length*2*60;
      // this.Queastion.forEach((q:any) => {
      //   q['givenAnswer']='';
        
      // });
      this.startTimer();
      console.log("data",this.Queastion);
      
    },(error)=>{
      console.log(error);
      
    })
  }

  preventBackButton(){
    history.pushState(null,location.href);
    this.loactionSt.onPopState(()=>{
      history.pushState(null,location.href);
    })

  }
  submit(){
    Swal.fire({
      title:'Do you want to submit the quiz',
      showCancelButton:true,
      confirmButtonText:'Submit',
      denyButtonText:'Dont save',
      icon:'info'

    }).then((e)=>{
      if(e.isConfirmed){
        this.evalQuiz();
        
      }
    })
  }

  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t)
      }
      else{
        this.timer--;
      }

    },1000)
  }
  getFormtedTime(){
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz(){

    // this.isSubmit=true
    //     // calculation
    //     this.Queastion.forEach((q:any)=>{
    //       if(q.answer==q.givenAnswer.trim())
    //       {
    //         this.correctAnswer++;
    //         let singleMarks=this.Queastion[0].quiz.maxMarks/this.Queastion.length
    //         this.marksGot+=singleMarks

    //       }
    //       if(q.givenAnswer.trim()!='')
    //       this.attempted++;
         
          
          
    //     })
    //     console.log("correctans",this.correctAnswer);
    //     console.log("marksgot",this.marksGot);
    //     console.log("attempted",this.attempted);

    this.queSer.evalQuiz(this.Queastion).subscribe((data:any)=>{
      console.log(data);
      this.attempted=data.attempted;
      this.correctAnswer=data.correctAnswer
      this.marksGot=data.marksGot
      this.isSubmit=true
    },
    (error)=>{
      console.log(error);
      
    }
    )

  }
  printPage(){
    window.print();
  }

}
