import { Injectable } from '@angular/core';
import { IDebtService } from 'src/app/core/interfaces/debt.interface';
import { OldBaseService } from 'src/app/core/services/old.base.service';
import { Debt, PartialDebt } from '../../interfaces/debt.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DebtService extends OldBaseService implements IDebtService<PartialDebt> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getDebt(code: string): Observable<Partial<Debt>> {
    throw new Error('Method not implemented.');
  }
}
