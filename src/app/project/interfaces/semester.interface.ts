import { Subject } from './subject.interface';

export interface Semester {
  id?: string;
  name?: string;
  start_date?: Date;
  end_date?: Date;
  subjects?: Subject[];
}

export type PartialSemester = Partial<Semester>;
