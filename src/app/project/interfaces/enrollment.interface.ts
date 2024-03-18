import { AcademicProgram } from './academic.program.interface';
import { Student } from './student.interface';

export interface Enrollment {
  id: string;
  academic_program: AcademicProgram;
  student: Student;
  code: string;
  // subjectRegistrations: SubjectRegistration[];
  register_date: Date;
  update_date: Date;
}

export type PartialEnrollment = Partial<Enrollment>;
