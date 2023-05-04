import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  Category:any={
    cid:0,
    title:''
  }

  constructor(private catSer:CategoryServiceService) { }

  ngOnInit(): void {

    this.catSer.getAllCategories().subscribe((data)=>{
      this.Category=data;
    },
    (error)=>{
      console.log(error);
      
    }
    )

    
  }

}
