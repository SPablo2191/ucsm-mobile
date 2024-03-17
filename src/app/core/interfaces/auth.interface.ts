import { Observable } from 'rxjs';

export interface Auth<T> {
  login(user: T): Observable<T>;
  logout(dni: string): Observable<T>;
  killSessions(dni: string): Observable<T>;
}
