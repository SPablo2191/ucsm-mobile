import { Enrollment } from './enrollment.interface';

export interface AcademicProgram {
  id?: string;
  name?: string;
  code?: string;
  // plan?: Plan;
  // subjects?: Subject[];
  enrollments?: Enrollment[];
}

export type PartialAcademicProgram = Partial<AcademicProgram>;
