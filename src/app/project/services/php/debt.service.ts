import { Injectable } from '@angular/core';
import { IDebtService } from 'src/app/core/interfaces/debt.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { Debt, PartialDebt } from '../../interfaces/debt.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { DebtQuery } from '../../enums/php/debt.request.enum';

@Injectable({
  providedIn: 'root',
})
export class DebtService extends OldBaseService implements IDebtService<PartialDebt> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getTotalBalance(id: string): Observable<Partial<Debt>> {
    let data: ApiRequest = {
      QUERY: DebtQuery.getBalance,
      NRODNI: id,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let debt: PartialDebt = {};
        if (response.data.length !== 0) {
          debt.balance = response.data[0].DEUTOT;
        }
        return debt;
      }),
    );
  }
  getDebt(code: string): Observable<Partial<Debt>> {
    let data: ApiRequest = {
      QUERY: DebtQuery.getDebt,
      CODUSU: code,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let debt: PartialDebt = {};
        return debt;
      }),
    );
  }
}
