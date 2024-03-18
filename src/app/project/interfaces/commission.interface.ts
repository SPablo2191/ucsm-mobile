import { Classroom } from './classroom.interface';
import { CommissionSchedule } from './commission.schedule';
import { Professor } from './professor.interface';
import { StudentCommission } from './student.commission.interface';

export interface Commission {
  id?: string;
  professor?: Professor;
  classroom?: Classroom;
  commission_schedule?: CommissionSchedule;
  student_commissions?: StudentCommission[];
}

export type PartialCommission = Partial<Commission>;
