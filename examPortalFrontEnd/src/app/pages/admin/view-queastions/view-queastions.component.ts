import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueastionServiceService } from 'src/app/services/queastion-service.service';

@Component({
  selector: 'app-view-queastions',
  templateUrl: './view-queastions.component.html',
  styleUrls: ['./view-queastions.component.css']
})
export class ViewQueastionsComponent implements OnInit {
  qid:any;
  title:any;
  queastion:any=[];


  constructor(private route:ActivatedRoute,private quSer:QueastionServiceService) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params['id']
    this.title=this.route.snapshot.params['title']

    this.quSer.getAllQueastionByQuizId(this.qid).subscribe((data)=>{
      console.log("data",data);
      this.queastion=data;
      
    },
    (error)=>{
      console.log(error);
      
    }
    )
    
  }

  delete(qid:any){
    console.log(qid);
    
  }

}
