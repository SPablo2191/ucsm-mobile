import { Debt } from './debt.interface';

export interface Installment {
  id: string;
  total_amount: number;
  register_date: Date;
  paid_amount: number;
  owed_amount: number;
  code: string;
  debt: Debt;
}

export type PartialInstallment = Partial<Installment>;
