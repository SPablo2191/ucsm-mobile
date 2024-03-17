import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/interfaces/auth.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialStudent, Student } from '../../interfaces/student.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from '../../../core/interfaces/request.interface';
import { authQuery } from '../../enums/php/auth.request.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends OldBaseService implements Auth<PartialStudent> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  login(user: Partial<Student>): Observable<Partial<Student>> {
    let data: ApiRequest = {
      QUERY: authQuery.login,
      NRODNI: user.identification_document,
      PASSWORD: user.password,
      FCMTKN: '',
    };
    return this.postRequest(data).pipe(
      map((data) => {
        let userData = data.USERDATA;
        console.log(userData);
        let student: PartialStudent = {};
        return student;
      }),
    );
  }
  logout(dni: string): Observable<Partial<Student>> {
    throw new Error('Method not implemented.');
  }
  killSessions(dni: string): Observable<Partial<Student>> {
    throw new Error('Method not implemented.');
  }
}
