import { Injectable } from '@angular/core';
import {
  CareerStatistics,
  PartialSubjectRegistration,
  SubjectRegistration,
} from '../../interfaces/subject.registration.interface';
import { ISubjectService } from 'src/app/core/interfaces/subject.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { PartialSemester } from '../../interfaces/semester.interface';
import { PaginateResponse } from '../../interfaces/paginate.response.interface';

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
  getSubjects(code: string, semesterId?: string): Observable<Partial<SubjectRegistration>[]> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    let params: any = { enrollment_id: code };
    if (semesterId) params.semester_id = semesterId;
    return this.get({
      headers: headers,
      params: params,
    }).pipe(
      map((response: any) => {
        let subjects = response.results;
        return subjects;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
  getSubject(subjectId: string): Observable<Partial<SubjectRegistration>> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.getId(subjectId, {
      headers: headers,
    });
  }
  getSemesters(): Observable<PartialSemester[]> {
    let token = localStorage.getItem('token');
    let url = environment.apiUrl + Endpoint.SEMESTER;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.httpClient
      .get<PaginateResponse<PartialSemester>>(url, {
        headers: headers,
      })
      .pipe(
        map((response) => {
          return response.results;
        }),
      );
  }
  getStatistics(code: string): Observable<CareerStatistics> {
    let token = localStorage.getItem('token');
    let url = this.serverUrl + 'get_statistics/';
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.httpClient.get<CareerStatistics>(url, {
      headers: headers,
      params: { enrollment_id: code },
    });
  }
  getGrades(code: string, semester_id: string): Observable<Partial<SubjectRegistration>[]> {
    throw new Error('Method not implemented.');
  }
}
