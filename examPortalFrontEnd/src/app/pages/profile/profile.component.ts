import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
   
user= {
  username:"",
  firstName:"",
  lastName:"",
  email:"",
  phoneNumber:"",
  authorities:[{
    authority:""
  }
    
  ],
  enable:false
}
  constructor( private userService: UserServicesService) { }

  ngOnInit(): void {

   this.user=this.userService.getUser();


  }

}
