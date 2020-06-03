import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionStatus = {
    user: null,
    email: null,
    isLoggedIn: false
  }

  $session = new BehaviorSubject<any>(this.sessionStatus);
  constructor(private _http: HttpClient, private _cookies: CookieService) {
    let session = localStorage.getItem('SESSIONID');
    if (session) {
      let temp = JSON.parse(localStorage.getItem('_DATA'));
      temp.isLoggedIn = true;
      this.sessionStatus = Object.assign({}, temp);
      this.$session.next(this.sessionStatus);
    }else{
      this.$session.next(this.sessionStatus);
    }

  }


  registerNutritionist(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/auth/register-nutritionist`, data).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  verifyUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/auth/validate-user`, data).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  loginUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/auth/login`, data).subscribe(
        data => {
          this.sessionStatus.user = data.user;
          this.sessionStatus.email = data.email;
          this.sessionStatus.isLoggedIn = true;
          this.$session.next(this.sessionStatus);
          localStorage.setItem('SESSIONID', data.token);
          localStorage.setItem('_DATA', JSON.stringify({ user: data.user, email: data.email }));
          resolve(data);
        },
        error => reject(error)
      )
    })
  }

  async signOut() {
    this._cookies.deleteAll();
    sessionStorage.clear();
    localStorage.clear();
    this.sessionStatus = {
      user: null,
      email: null,
      isLoggedIn: false
    }
    this.$session.next(this.sessionStatus);
  }

}
