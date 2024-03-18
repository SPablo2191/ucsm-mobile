import { StudentCommission } from './student.commission.interface';

export interface Commission {
  id?: string;
  // professor?: Professor;
  // classroom?: Classroom;
  // commission_schedule?: CommissionSchedule;
  student_commissions?: StudentCommission[];
}

export type PartialCommission = Partial<Commission>;
