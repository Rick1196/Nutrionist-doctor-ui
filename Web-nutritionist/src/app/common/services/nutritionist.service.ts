import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Nutritionist} from '../entities/nutritionist';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NutritionistService {

  constructor(private _http: HttpClient) { }

  getNutritionistProfile(user_name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<Nutritionist>(`${environment.baseUrl}/v1/users/get-nutritionist-profile/${user_name}`).subscribe(
        data => {
          resolve(data)
        },
        error => reject(error)
      )
    })
  }

  isVerified(user_name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<any>(`${environment.baseUrl}/v1/users/is-verified/${user_name}`).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  toBase64(array: any) {
    const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(array.data)));
    return base64;
  }

  putNutritionist(nutritionist: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post<any>(`${environment.baseUrl}/v1/users/update-nutritionist-profile/`, nutritionist).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

}
