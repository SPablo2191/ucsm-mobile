import { Installment } from './installment.interface';
import { Student } from './student.interface';

export interface Debt {
  id: string;
  balance: number;
  register_date: Date;
  updated_date: Date;
  installments: Installment[];
  student: Student;
}

export type PartialDebt = Partial<Debt>;
