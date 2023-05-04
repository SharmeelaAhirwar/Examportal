import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueastionServiceService } from 'src/app/services/queastion-service.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-queastion',
  templateUrl: './add-queastion.component.html',
  styleUrls: ['./add-queastion.component.css']
})
export class AddQueastionComponent implements OnInit {
  public Editor = ClassicEditor
  Queastion={
    quesId:0,
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qid:0

    }





  }


  qid:number=0;
  qizTitle:any;
  constructor(private activatedRoute:ActivatedRoute,
    private queastionSer:QueastionServiceService
    ) { }

  ngOnInit(): void {
    this.qid=this.activatedRoute.snapshot.params['qizId']
    this.qizTitle=this.activatedRoute.snapshot.params['title']
    this.Queastion.quiz.qid=this.qid;
    
    // alert(this.qid)
    
  }
  addQueastion(){
    console.log(this.Queastion);
    if(this.Queastion.content.trim()=='' || this.Queastion.content==null)
    return

    if(this.Queastion.option1.trim()=='' || this.Queastion.option1==null)
    return

    if(this.Queastion.option2.trim()=='' || this.Queastion.option2==null)
    return

    this.queastionSer.addQueastion(this.Queastion).subscribe((data)=>{
      this.Queastion={
        quesId:0,
        content:'',
        image:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:'',
        quiz:{
          qid:0
    
        }

      }
      Swal.fire('Success !!','Queastion Added Successfully !!','success')
    },
    (error)=>{
      Swal.fire('Error','server error !','error')
    }
    )


    
  }

}

