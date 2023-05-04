import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizeServiceService } from 'src/app/services/quize-service.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cid:number=0;
  quiz:any;
  constructor(private activatedRoute:ActivatedRoute,
    private quizSer:QuizeServiceService
    ) { }

  ngOnInit(): void {

    this.cid=this.activatedRoute.snapshot.params['catId']
    this.activatedRoute.params.subscribe((params)=>{
      this.cid=params['catId'];
      if(this.cid==0){
        //load all quizes
        this.quizSer.getAllActiveQuizes().subscribe((data)=>{
          this.quiz=data;
        },
        (error)=>{
          console.log(error);
          
        })
      }
      else
      {
        //load specific quizes
        // this.quiz=[]
        this.quizSer.getQuizByCategoryId(this.cid).subscribe((data)=>{
          this.quiz=data
          console.log("daattta",data);
          
        })
      }

    })
    
  }

}
