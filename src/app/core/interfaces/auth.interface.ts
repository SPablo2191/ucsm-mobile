import { Observable } from 'rxjs';

export interface IAuthService<T> {
  login(user: T): Observable<T>;
  logout(dni: string): Observable<T>;
  killSessions(dni: string): Observable<T>;
}
