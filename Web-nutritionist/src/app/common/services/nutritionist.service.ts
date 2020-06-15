import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Nutritionist } from '../entities/nutritionist';
@Injectable({
  providedIn: 'root'
})
export class NutritionistService {

  constructor(private http: HttpClient) { }

  getNutritionistProfile(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<Nutritionist>(`${environment.baseUrl}/v1/nutritionist/get-nutritionist-profile/${username}`).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  getStatistics(username: string): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.http.get<any>(`${environment.baseUrl}/v1/nutritionist/get-statistics/${username}`).subscribe(
        data => resolve(data),
        error => rejects(error)
      );
    });
  }


  getConsultations(query: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams();
      params = params.append('start', query.start);
      params = params.append('end', query.end);
      params = params.append('nutritionist', query.nutritionist);
      params = params.append('atended', query.atended);
      this.http.get<any>(`${environment.baseUrl}/v1/schedule/filter-by-range`, { params }).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }


  getPatients(query: any, username: string): Promise<any> {
    let params = new HttpParams();
    params.append('pagination', query.pagination);
    params.append('params', query.params);
    if (query.pagination === true) {
      params = params.append('size', query.size);
      params = params.append('page', query.page);
    }
    if (query.params === true) {
      params = params.append('gender', query.gender);
      params = params.append('phone', query.phone);
      params = params.append('username', query.username);
      params = params.append('email', query.email);
    }
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.baseUrl}/v1/nutritionist/patients/${username}`, { params }).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  isVerified(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.baseUrl}/v1/users/is-verified/${username}`).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

  toBase64(array: any) {
    const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(array.data)));
    return base64;
  }

  putNutritionist(nutritionist: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.baseUrl}/v1/users/update-nutritionist-profile/`, nutritionist).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }

}
