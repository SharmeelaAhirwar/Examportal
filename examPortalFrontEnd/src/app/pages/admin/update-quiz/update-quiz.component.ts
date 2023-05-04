import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizeServiceService } from 'src/app/services/quize-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private quizSer:QuizeServiceService,
    private catSer:CategoryServiceService,
    private router:Router
    ) { }
  qId:number=0;
  Quiz: any;
  categories:any;

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qid'];
    // alert(this.qId)
    this.quizSer.getQuizById(this.qId).subscribe((data)=>{
      this.Quiz=data;
      console.log(this.Quiz);
      
    },
    (error)=>{
      console.log(error);
      
    }
    )
    

    this.catSer.getAllCategories().subscribe((data)=>{
      this.categories=data;
      console.log(this.categories);
      
    },
    (error)=>{
      console.log(error);
      
    }
    )

  }
  updateQuiz(){
    console.log(this.Quiz);
    this.quizSer.updateQuiz(this.Quiz).subscribe((data)=>{
      Swal.fire('success!! ','updated successfully','success').then((e)=>{
        this.router.navigate(['/admin/quizes'])
      })
    },
    (error)=>{
      Swal.fire('Error!!','Server-Error','error')
    }
    )
    
  }

}
