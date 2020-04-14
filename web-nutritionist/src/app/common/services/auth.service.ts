import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  public login(data:any):Promise<any>{
    return new Promise((resolve, reject) =>{
      this._http.post<any>(`${environment.baseUrl}/v1/auth/login`,data).subscribe(
        success=>resolve(success),
        error=>reject(error)
      )
    })
  }
}
