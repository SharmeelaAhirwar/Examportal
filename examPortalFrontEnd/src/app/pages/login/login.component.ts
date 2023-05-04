import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={

    userName:"",

    password:""
  }

  constructor(private snack:MatSnackBar,private userService:UserServicesService,private router:Router) { }
 

  ngOnInit(): void {
  }

  login(){

    if(this.loginData.userName.trim()=='' || this.loginData.userName==null){

      this.snack.open('userName is required','',{
        duration:3000}
        )
        return;

    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null){

      this.snack.open('password is required','',{
        duration:3000}
        )
        return;

    }

    this.userService.loginGenrateToken(this.loginData).subscribe(

      (data:any)=>{

      console.log(data);

      //login than set token to loaclhost

      this.userService.setToken(data.token)
      //get current user

      this.userService.getCurrentUser().subscribe(
        (data:any)=>{
          this.userService.setUser(data)
          console.log(data);

          //redirect admin dashboard if user is admin
          if(this.userService.getUserRole()=='ADMIN'){
            // window.location.href='/admin'
            this.router.navigate(['/admin'])

            this.userService.loginStatus.next(true);
          }
          // ADMIN DASHBOARD



         //redirect normal dashboard if user is normal

        else if(this.userService.getUserRole()=='NORMAL'){
          // window.location.href='/user'
          this.router.navigate(['/user/0'])
          this.userService.loginStatus.next(true);
        }
        else{

          //logout
          this.userService.logout();
        }
         
          
        }

      );
      

    },
    (error)=>{

      console.log(error);

      this.snack.open("invalid dataa!!!",'',{
        duration:3000
      })
      
    })



    
    
    
  }

}
