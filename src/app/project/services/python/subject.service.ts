import { Injectable } from '@angular/core';
import { PartialSubjectRegistration, SubjectRegistration } from '../../interfaces/subject.registration.interface';
import { ISubjectService } from 'src/app/core/interfaces/subject.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class SubjectService
  extends BaseService<PartialSubjectRegistration>
  implements ISubjectService<PartialSubjectRegistration[]>
{
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.SUBJECT_REGISTRATION;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getSubjects(code: string): Observable<Partial<SubjectRegistration>[]> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.get({
      headers: headers,
      params: { enrollment_id: code },
    }).pipe(
      map((response: any) => {
        let subjects = response.results;
        console.log(subjects);
        return subjects;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
  getSemesters(code: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getGrades(code: string, semester_id: string): Observable<Partial<SubjectRegistration>[]> {
    throw new Error('Method not implemented.');
  }
}
