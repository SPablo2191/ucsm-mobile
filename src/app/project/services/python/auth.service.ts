import { Injectable } from '@angular/core';
import { IAuthService } from 'src/app/core/interfaces/auth.interface';
import { PartialStudent, Student, StudentWithToken } from '../../interfaces/student.interface';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService<PartialStudent | StudentWithToken> {
  constructor(protected httpClient: HttpClient) {}
  login(user: Partial<Student>): Observable<PartialStudent> {
    let url = environment.apiUrl + Endpoint.LOGIN;
    console.log(url);
    return this.httpClient.post<StudentWithToken>(url, user).pipe(
      map((response) => {
        let student = response.user;
        localStorage.setItem('student_id', student.id);
        localStorage.setItem('token', response.token);
        localStorage.setItem('identification_document', student.identification_document);
        localStorage.setItem('expires_In', response.expires_in);
        return student;
      }),
    );
  }
  logout(dni: string): Observable<Partial<Student>> {
    let url = environment.apiUrl + Endpoint.LOGOUT;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + localStorage.getItem('token'));
    return this.httpClient.post<Partial<Student>>(url, null, {
      headers: headers,
    });
  }
  killSessions(dni: string): Observable<Partial<Student>> {
    throw new Error('Method not implemented.');
  }
}
