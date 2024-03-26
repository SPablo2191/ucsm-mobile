import { Injectable } from '@angular/core';
import { IScheduleService } from 'src/app/core/interfaces/schedule.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { PartialSubjectRegistration, SubjectRegistration } from '../../interfaces/subject.registration.interface';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { scheduleQuery } from '../../enums/php/schedule.request.enum';
import { PartialSubject } from '../../interfaces/subject.interface';
import { capitalizeFirstLetter } from 'src/app/core/utils/util.function';
import { Commission, PartialCommission } from '../../interfaces/commission.interface';
import { Days, PartialCommissionSchedule } from '../../interfaces/commission.schedule';
import { PartialProfessor } from '../../interfaces/professor.interface';
import { PartialStudentCommission } from '../../interfaces/student.commission.interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService extends OldBaseService implements IScheduleService<PartialSubjectRegistration[]> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getSchedule(code: string): Observable<Partial<SubjectRegistration>[]> {
    console.log(code);
    let data: ApiRequest = {
      QUERY: scheduleQuery.getSchedule,
      CODUSU: code,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let responseData = response.data;
        let schedule: PartialSubjectRegistration[] = [];

        responseData.map((course: any) => {
          let newScheduleSubject: PartialSubjectRegistration = {};
          let commissions = [];
          // add subject
          let subject: PartialSubject = {};
          subject.name = capitalizeFirstLetter(course.NOMCUR);
          // add commission
          let commission: PartialCommission = {};
          // add commission Schedule
          // add startDate and end Date
          const [startHour, startMinute] = course.INI.split(':').map(Number);
          const [endHour, endMinute] = course.FIN.split(':').map(Number);

          // Crear la fecha inicial
          const startDate = new Date();
          startDate.setHours(startHour, startMinute, 0, 0);
          // Establecer el día de la semana de la fecha inicial
          startDate.setDate(startDate.getDate() + (this.getDayIndex(course.DIA) - startDate.getDay()));

          // Crear la fecha final
          const endDate = new Date();
          endDate.setHours(endHour, endMinute, 0, 0);
          // Establecer el día de la semana de la fecha final
          endDate.setDate(endDate.getDate() + (this.getDayIndex(course.DIA) - endDate.getDay()));

          let commissionSchedule: PartialCommissionSchedule = {
            day: this.getEnumIndex(course.DIA),
            start_time: startDate,
            end_time: endDate,
          };
          commission.commission_schedule = commissionSchedule;
          commission.professor = this.getProfessor(course.DOCENTE.split(' '));
          newScheduleSubject.subject = subject;
          commissions.push({
            commission: commission,
            subject: subject,
          } as PartialStudentCommission);
          newScheduleSubject.student_commissions = commissions;
          schedule.push(newScheduleSubject);
        });

        console.log(schedule);
        return schedule;
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
  getDayIndex(day: string): number {
    const days: Record<string, number> = {
      DOM: 0,
      LUN: 1,
      MAR: 2,
      MIE: 3,
      JUE: 4,
      VIE: 5,
      SAB: 6,
    };
    return days[day];
  }
  getEnumIndex(day: string): Days {
    const days: Record<string, Days> = {
      DOM: Days.SUNDAY,
      LUN: Days.MONDAY,
      MAR: Days.TUESDAY,
      MIE: Days.WEDNESDAY,
      JUE: Days.THURSDAY,
      VIE: Days.FRIDAY,
      SAB: Days.SATURDAY,
    };
    return days[day];
  }

  addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
