import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor(private http: HttpClient) { }

  getCountires(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/v1/misc/get-countries`).subscribe(
        success => resolve(success),
        error => reject(error)
      );
    });
  }
}
