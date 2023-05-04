import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServicesService } from './user-services.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuardGuard implements CanActivate {


  constructor( private userService: UserServicesService,private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.userService.isLoggedIn() && this.userService.getUserRole()=='NORMAL')
      return true;

      this.router.navigate(['login'])

    return false;
  }
  
}
