import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,private _cookies:CookieService) {

   }


  registerNutritionist(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/auth/register-nutritionist`, data).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  verifyUser(data:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/auth/validate-user`, data).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  loginUser(data:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this._http.post<any>(`${environment.baseUrl}/v1/auth/login`,data).subscribe(
        data=> { 
          console.log(data.token);
          
          this._cookies.set('SESSIONID',data.token,18000,'/auth',null,true,'Strict')         
          resolve(data);
        },
        error =>reject(error)
      )
    })
  }


  




}
