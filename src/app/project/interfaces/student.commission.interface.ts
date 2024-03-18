import { Commission } from './commission.interface';
import { Grade } from './grade.interface';
import { SubjectRegistration } from './subject.registration.interface';

export interface StudentCommission {
  id?: string;
  commission?: Commission;
  subject_registration?: SubjectRegistration;
  student_commissions?: Grade[];
}

export type PartialStudentCommission = Partial<StudentCommission>;
