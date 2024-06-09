import { AcademicProgram } from './academic.program.interface';
import { Student } from './student.interface';

export interface Enrollment {
  id: string;
  academic_program: AcademicProgram;
  student: Student;
  code: string;
  register_date: Date;
  update_date: Date;
  student_code: string;
}

export type PartialEnrollment = Partial<Enrollment>;
