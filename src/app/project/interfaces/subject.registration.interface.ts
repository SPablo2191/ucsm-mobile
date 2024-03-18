import { Enrollment } from './enrollment.interface';
import { StudentCommission } from './student.commission.interface';
import { Subject } from './subject.interface';

export interface SubjectRegistration {
  id?: string;
  subject?: Subject;
  final_score?: number | null;
  simulated_score?: number | null;
  register_date?: Date;
  update_date?: Date;
  enrollment?: Enrollment;
  student_commissions: StudentCommission[];
}

export type PartialSubjectRegistration = Partial<SubjectRegistration>;
