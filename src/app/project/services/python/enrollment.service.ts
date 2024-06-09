import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Enrollment, PartialEnrollment } from '../../interfaces/enrollment.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService extends BaseService<PartialEnrollment | PartialEnrollment[]> {
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.ENROLLMENT;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getEnrollments(): Observable<PartialEnrollment[]> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.get({
      headers: headers,
      params: { identification_document: localStorage.getItem('identification_document') },
    }).pipe(
      map((response: any) => {
        let enrollments = response.results;
        console.log(enrollments);
        return enrollments;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
}
