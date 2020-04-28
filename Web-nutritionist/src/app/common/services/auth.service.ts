import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }


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


  




}
