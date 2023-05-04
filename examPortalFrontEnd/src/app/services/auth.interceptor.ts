// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { UserServicesService } from './user-services.service';



// // const TOKEN_HEADER='Authorization';
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private userService:UserServicesService){}
//   intercept(
//     httpRequest: HttpRequest<any>,
//      next: HttpHandler
//      ):Observable<HttpEvent<any>> {
//       //any alteration in httpRequest can be done here

//       //add the jwt token in header
// console.log("interceptor called");

//       let authReq=httpRequest;
//       const token=this.userService.getToken();
//       if(token!=null){ 


//         authReq=authReq.clone({
//             setHeaders:{
//                 Authorization:'Bearer' +token
//             },
//         })
//       }
//       return next.handle(authReq);


   
//   }
// }
// export const AuthInterceptorProviders=[
//     {

//         provide: HTTP_INTERCEPTORS,
//         useClass:AuthInterCeptor,
//         multi:true

// },
    
// ]


import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { UserServicesService } from './user-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterCeptor implements HttpInterceptor {
  
  constructor(private userService: UserServicesService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this. userService.getToken();
    if (token) {
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}

   
//   }
// }
export const AuthInterceptorProviders=[
  {

      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterCeptor,
      multi:true

},
  
]