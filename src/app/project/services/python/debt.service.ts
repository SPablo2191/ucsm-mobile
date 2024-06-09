import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { PartialDebt } from '../../interfaces/debt.interface';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DebtService extends BaseService<PartialDebt> {
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.DEBT;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getDebt(enrollmentId: string): Observable<PartialDebt> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.httpClient
      .get(this.serverUrl + 'get_debt/', {
        headers: headers,
        params: { enrollment_id: enrollmentId },
      })
      .pipe(
        map((response: any) => {
          let debt = response;
          return debt;
        }),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);
        }),
      );
  }
}
