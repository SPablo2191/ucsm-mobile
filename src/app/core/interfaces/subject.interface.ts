import { Observable } from 'rxjs';

export interface ISubjectService<T> {
  getSubjects(code: string): Observable<T>;
  getSemesters(code: string): Observable<any>;
  getGrades(code: string, semester_id: string): Observable<T>;
}
