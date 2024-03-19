import { Observable } from 'rxjs';

export interface IDebtService<T> {
  getDebt(code: string): Observable<T>;
  getTotalBalance(id: string): Observable<T>;
}
