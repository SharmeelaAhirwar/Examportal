import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  public loginStatus=new Subject<boolean>();

  constructor( private http:HttpClient) { }


   public addUser(user:any){
    console.log("hii");
    
     return this.http.post('http://localhost:8080/user/create',user);

   }

//  genrate token
   public loginGenrateToken(loginUser:any){
    return this.http.post('http://localhost:8080/genrate-token',loginUser);


   }

   //get current-user

   public getCurrentUser(){

    console.log("get current usr calld");
    
    return this.http.get('http://localhost:8080/current-user');
   }


  //  set token to localStorage and login
  public setToken(token:any){
    localStorage.setItem('token',token);
    this.loginStatus.next(true);
    return true
  }

  // user is login

  public isLoggedIn(){

    let Tokenstr=localStorage.getItem('token')

    if(Tokenstr==undefined || Tokenstr==' ' || Tokenstr==null)
    return false

    else
    return true
  }


  // logout user

  public logout(){
    localStorage.removeItem('token')

    localStorage.removeItem('user')
    return true;
  }

  //getToken

  public getToken(){
    return localStorage.getItem('token');
  }

  //set user
  public setUser(User :any){
    localStorage.setItem('user',JSON.stringify(User));
  }

  //get-user
  public getUser(){

    let userStr=localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr)
    }
    else{
      this.logout
      return null;
    }
    
  }

  //get user-role

  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }

}
