import { Building } from './building.interface';
import { Commission } from './commission.interface';

export interface Classroom {
  id?: string;
  name?: string;
  building?: Building;
  commissions?: Commission[];
}

export type PartialClassroom = Partial<Classroom>;
