import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedInUser=false
  user=null
  

  constructor(public userService: UserServicesService) { }

  ngOnInit(): void {
    this.isLoggedInUser=this.userService.isLoggedIn();
    this.user=this.userService.getUser().username;
    this.userService.loginStatus.asObservable().subscribe((data)=>{
      this.isLoggedInUser=this.userService.isLoggedIn();
    this.user=this.userService.getUser().username;
    });
  }

  

   public logout(){

    this.userService.logout();
    // this.isLoggedInUser=false;
    // this.user=null;
    // window.location.reload();
    this.userService.loginStatus.next(false);
  }
  // public getUserName(){
  //   this.userService.getUser().userName;
  // }

}
