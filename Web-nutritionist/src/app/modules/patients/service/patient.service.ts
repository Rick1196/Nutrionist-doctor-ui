import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getConsultations(query: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams();
      params = params.append('start', query.start);
      params = params.append('end', query.end);
      params = params.append('nutritionist', query.patient);
      params = params.append('atended', query.atended);
      this.http.get<any>(`${environment.baseUrl}/v1/patient/consultations/${query.patient}`, { params }).subscribe(
        data => resolve(data),
        error => reject(error)
      );
    });
  }
}
