import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NutritionistService {

  nutritionist:any;
  $nutritionist =  new BehaviorSubject<any>(this.nutritionist);
  constructor(private _http: HttpClient) { }

  getNutritionistProfile(user_name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<any>(`${environment.baseUrl}/v1/users/get-nutritionist-profile/${user_name}`).subscribe(
        data => {
          this.nutritionist = data;
          this.$nutritionist.next(this.nutritionist);
          resolve(data)
        },
        error => reject(error)
      )
    })
  }

  isVerified(user_name:string):Promise<any>{
    return new Promise((resolve,reject)=>{
      this._http.get<any>(`${environment.baseUrl}/v1/users/is-verified/${user_name}`).subscribe(
        data=>resolve(data),
        error=>reject(error)
      )
    })
  }
  


  toBase64(array: any) {
    const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(array.data)));
    return base64;
  }

}
