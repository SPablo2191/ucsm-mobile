import { Observable } from 'rxjs';

export interface ISubjectService<T> {
  getSubjects(code: string): Observable<T>;
}
