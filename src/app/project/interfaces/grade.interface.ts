import { Phase } from '../enums/phase.enum';
import { StudentCommission } from './student.commission.interface';

export interface Grade {
  id?: string;
  student_commission?: StudentCommission;
  score?: number | null;
  phase?: Phase;
}

export type PartialGrade = Partial<Grade>;
