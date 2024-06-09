import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { PartialStudent, Student } from '../../interfaces/student.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService<PartialStudent> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getProfile(): Observable<Partial<Student>> {
    let url = environment.apiUrl + Endpoint.STUDENT + `${localStorage.getItem('student_id')}/`;
    let token = localStorage.getItem('token');
    console.log(url);
    console.log(token);
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.httpClient.post<PartialStudent>(url, null, {
      headers: headers,
    });
  }
}
