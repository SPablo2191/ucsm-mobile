import { Injectable } from '@angular/core';
import { IDebtService } from 'src/app/core/interfaces/debt.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { Debt, PartialDebt } from '../../interfaces/debt.interface';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { DebtQuery } from '../../enums/php/debt.request.enum';
import { PartialInstallment } from '../../interfaces/installment.interface';

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
      NRODNI: code,
    };
    return this.postRequest(data).pipe(
      map((response) => {
        let debt: PartialDebt = {};
        if (response.error != undefined) {
          console.log(response.error);
          return debt;
        }
        let responseData = response.data;
        debt.balance = 0;
        if (responseData.length === 0) {
          return debt;
        }
        let installments: PartialInstallment[] = [];
        responseData.map((installment: any) => {
          let newInstallment: PartialInstallment = {
            code: this.setCuota(installment.CUOTA),
            owed_amount: +installment.MORA,
            paid_amount: +installment.DEUDA,
            total_amount: parseFloat(installment.MORA) + parseFloat(installment.DEUDA),
            register_date: new Date(installment.FECVEN),
          };
          if (debt.balance !== undefined) {
            debt.balance += newInstallment.total_amount || 0;
          }
          installments.push(newInstallment);
        });
        debt.installments = installments;
        return debt;
      }),
    );
  }

  private setCuota(cuota: string): string {
    let cuota2 = '';
    switch (cuota) {
      case '01':
        cuota2 = 'MT';
        break;
      case '02':
        cuota2 = '01';
        break;
      case '03':
        cuota2 = '02';
        break;
      case '04':
        cuota2 = '03';
        break;
      case '05':
        cuota2 = '04';
        break;
      default:
        cuota2 = '-';
    }
    return cuota2;
  }
}
