import { Classroom } from './classroom.interface';

export interface Building {
  id?: string;
  name?: string;
  classrooms?: Classroom[];
}

export type PartialBuilding = Partial<Building>;
