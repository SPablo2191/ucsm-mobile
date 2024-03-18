import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/interfaces/auth.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialStudent, Student } from '../../interfaces/student.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from '../../../core/interfaces/request.interface';
import { authQuery } from '../../enums/php/auth.request.enum';
import { capitalizeFirstLetter } from 'src/app/core/utils/util.function';

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
      map((response) => {
        let userData = response.data.USERDATA;
        localStorage.setItem('CODALU', userData.CODALU);
        localStorage.setItem('NOMUNI', userData.NOMUNI);
        localStorage.setItem('UNIACAS', JSON.stringify(response.data.CODIGOS));
        let studentNames: string[] = userData.NOMALU.split(' ');
        let student: PartialStudent = {
          identification_document: userData.NRODNI,
          email: userData.EMAIL,
          phone_number: userData.NROCEL,
        };
        switch (studentNames.length) {
          case 2:
            student.first_name = capitalizeFirstLetter(studentNames[1]);
            student.last_name = capitalizeFirstLetter(studentNames[0]);
            break;
          case 3:
            student.first_name = capitalizeFirstLetter(studentNames[2]);
            student.second_last_name = capitalizeFirstLetter(studentNames[1]);
            student.last_name = capitalizeFirstLetter(studentNames[0]);
            break;
          case 4:
            student.middle_name = capitalizeFirstLetter(studentNames[3]);
            student.first_name = capitalizeFirstLetter(studentNames[2]);
            student.second_last_name = capitalizeFirstLetter(studentNames[1]);
            student.last_name = capitalizeFirstLetter(studentNames[0]);
            break;
          default:
            student.middle_name = capitalizeFirstLetter(studentNames[3]);
            student.first_name = capitalizeFirstLetter(studentNames[2]);
            student.second_last_name = capitalizeFirstLetter(studentNames[1]);
            student.last_name = capitalizeFirstLetter(studentNames[0]);
            break;
        }
        localStorage.setItem('student', JSON.stringify(student));
        return student;
      }),
    );
  }
  logout(dni: string): Observable<Partial<Student>> {
    let data: ApiRequest = {
      QUERY: authQuery.logout,
      NRODNI: dni,
    };
    return this.postRequest(data).pipe(
      map((data) => {
        console.log(data);
        localStorage.clear();
        let student: PartialStudent = {};
        return student;
      }),
    );
  }
  killSessions(dni: string): Observable<Partial<Student>> {
    let data: ApiRequest = {
      QUERY: authQuery.killAll,
      NRODNI: dni,
    };
    return this.postRequest(data).pipe(
      map((data) => {
        console.log(data);
        let student: PartialStudent = {};
        return student;
      }),
    );
  }
}
