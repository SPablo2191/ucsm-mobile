import { AcademicProgram } from './academic.program.interface';
import { Semester } from './semester.interface';
import { SubjectRegistration } from './subject.registration.interface';

export interface Subject {
  id?: string;
  name?: string;
  academic_program?: AcademicProgram;
  semester?: Semester;
  subject_registrations?: SubjectRegistration[];
}

export type PartialSubject = Partial<Subject>;
