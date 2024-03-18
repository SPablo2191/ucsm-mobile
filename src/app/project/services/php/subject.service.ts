import { Injectable } from '@angular/core';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialSubjectRegistration, SubjectRegistration } from '../../interfaces/subject.registration.interface';
import { Subject } from 'src/app/core/interfaces/subject.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { subjectQuery } from '../../enums/php/subject.request.enum';
import { PartialSubject } from '../../interfaces/subject.interface';
import { capitalizeFirstLetter } from 'src/app/core/utils/util.function';
import { PartialStudentCommission } from '../../interfaces/student.commission.interface';
import { PartialCommission } from '../../interfaces/commission.interface';
import { PartialProfessor, Professor } from '../../interfaces/professor.interface';

@Injectable({
  providedIn: 'root',
})
export class SubjectService extends OldBaseService implements Subject<PartialSubjectRegistration[]> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getSubjects(code: string): Observable<Partial<SubjectRegistration>[]> {
    let data: ApiRequest = {
      QUERY: subjectQuery.getSubjects,
      CODUSU: code,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let subjects: PartialSubjectRegistration[] = [];
        if (response.data) {
          console.log(response.data);
          let subjectsData = response.data;
          subjectsData.map((subject: any) => {
            let professorNames: string[] = subject.CNOMBRE.split(' ');
            let commissionProfessor = this.getProfessor(professorNames);
            let newSubject: PartialSubjectRegistration = {
              subject: {
                name: capitalizeFirstLetter(subject.CDESCRI),
              } as PartialSubject,
              student_commissions: [
                {
                  commission: {
                    id: subject.SECGRU,
                    professor: commissionProfessor,
                  } as PartialCommission,
                } as PartialStudentCommission,
              ],
            };
            subjects.push(newSubject);
          });
        }
        return subjects;
      }),
    );
  }
  getProfessor(names: string[]) {
    let professor: PartialProfessor = {};
    switch (names.length) {
      case 2:
        professor.first_name = capitalizeFirstLetter(names[1]);
        professor.last_name = capitalizeFirstLetter(names[0]);
        break;
      case 3:
        professor.first_name = capitalizeFirstLetter(names[2]);
        professor.second_last_name = capitalizeFirstLetter(names[1]);
        professor.last_name = capitalizeFirstLetter(names[0]);
        break;
      case 4:
        professor.middle_name = capitalizeFirstLetter(names[3]);
        professor.first_name = capitalizeFirstLetter(names[2]);
        professor.second_last_name = capitalizeFirstLetter(names[1]);
        professor.last_name = capitalizeFirstLetter(names[0]);
        break;
      default:
        professor.middle_name = capitalizeFirstLetter(names[3]);
        professor.first_name = capitalizeFirstLetter(names[2]);
        professor.second_last_name = capitalizeFirstLetter(names[1]);
        professor.last_name = capitalizeFirstLetter(names[0]);
        break;
    }
    return professor;
  }
}
