import { Injectable } from '@angular/core';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialSubjectRegistration, SubjectRegistration } from '../../interfaces/subject.registration.interface';
import { Subject } from 'src/app/core/interfaces/subject.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { subjectQuery } from '../../enums/php/subject.request.enum';

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
        console.log(response);
        if (response.data) {
          console.log(response);
        }
        let subjects: PartialSubjectRegistration[] = [];
        return subjects;
      }),
    );
  }
}
