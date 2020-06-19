import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionStatus = {
    user: null,
    email: null,
    role: null,
    isLoggedIn: false
  };

  $session = new BehaviorSubject<any>(this.sessionStatus);
  constructor(private http: HttpClient) {
    const session = localStorage.getItem('SESSIONID');
    if (session) {
      const temp = JSON.parse(localStorage.getItem('_DATA'));
      temp.isLoggedIn = true;
      this.sessionStatus = Object.assign({}, temp);
      this.$session.next(this.sessionStatus);
    } else {
      this.$session.next(this.sessionStatus);
    }

  }

  resendCode(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/v1/auth/resend-code/${username}`).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  requestChange(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/v1/auth/request-change/${username}`).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  changePassword(username: string, password: string, code: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/v1/auth/change-password/${username}/${password}/${code}`).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  registerNutritionist(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.baseUrl}/v1/auth/register-nutritionist`, data).subscribe(
        result => resolve(result),
        error => reject(error)
      );
    });
  }

  verifyUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.baseUrl}/v1/auth/validate-user`, data).subscribe(
        result => resolve(result),
        error => reject(error)
      );
    });
  }

  loginUser(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.baseUrl}/v1/auth/login`, params).subscribe(
        data => {
          this.sessionStatus.user = data.user;
          this.sessionStatus.email = data.email;
          this.sessionStatus.role = data.role;
          this.sessionStatus.isLoggedIn = true;
          this.$session.next(this.sessionStatus);
          localStorage.setItem('SESSIONID', data.token);
          localStorage.setItem('_DATA', JSON.stringify({ user: data.user, email: data.email, role: data.role }));
          resolve(data);
        },
        error => reject(error)
      );
    });
  }

  async signOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.sessionStatus = {
      user: null,
      email: null,
      role: null,
      isLoggedIn: false
    };
    this.$session.next(this.sessionStatus);
  }

}
