import { Injectable } from '@angular/core';
import { IScheduleService } from 'src/app/core/interfaces/schedule.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialSubjectRegistration, SubjectRegistration } from '../../interfaces/subject.registration.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { scheduleQuery } from '../../enums/php/schedule.request.enum';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService extends OldBaseService implements IScheduleService<PartialSubjectRegistration> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getSchedule(code: string): Observable<Partial<SubjectRegistration>> {
    console.log(code);
    let data: ApiRequest = {
      QUERY: scheduleQuery.getSchedule,
      CODUSU: code,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let schedule: PartialSubjectRegistration = {};
        console.log(response);
        // response.
        return schedule;
      }),
    );
  }
}
