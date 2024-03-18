import { Observable } from 'rxjs';

export interface Subject<T> {
  getSubjects(code: string): Observable<T>;
}
