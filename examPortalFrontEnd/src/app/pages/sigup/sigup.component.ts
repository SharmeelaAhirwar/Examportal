import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  constructor(private userService:UserServicesService,private snack:MatSnackBar,private router:Router) { }
  public User={
    userName:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:""
  };

  
  ngOnInit(): void {}
  formSubmit(){
   console.log(this.User);

   if(this.User.userName==""|| this.User.userName==null){
    this.snack.open("username required !!",'ok',{
      duration:3000,
      // verticalPosition:'top',
      // horizontalPosition:'left'
    
      
    })
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    // alert("user required  : ")
    return;
   }

   this.userService.addUser(this.User).subscribe(
    (data)=>{
      Swal.fire("success","user registered ","success")
      this.router.navigate(['login'])
      console.log("data");
      
    },
    (error)=>{
      alert('something went wrong')
    }
   );
   

   

   
    
  }


}
