import { Commission } from './commission.interface';

export interface Professor {
  id?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  second_last_name?: string;
  email?: string;
  image_url?: string;
  register_date?: Date;
  commissions?: Commission[];
}

export type PartialProfessor = Partial<Professor>;
