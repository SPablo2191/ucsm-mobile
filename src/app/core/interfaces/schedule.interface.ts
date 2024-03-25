import { Observable } from 'rxjs';

export interface IScheduleService<T> {
  getSchedule(code: string): Observable<T>;
}
