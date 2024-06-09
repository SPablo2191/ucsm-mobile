import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { PartialStudent, Student } from '../../interfaces/student.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService<PartialStudent> {
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.STUDENT;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getProfile(): Observable<Partial<Student>> {
    let student_id = localStorage.getItem('student_id') || '';
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.getId(student_id, {
      headers: headers,
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
}
