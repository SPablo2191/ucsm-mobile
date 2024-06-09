import { Building } from './building.interface';

export interface Event {
  id: string;
  name: string;
  description: string;
  image_url: string;
  start_date: Date;
  end_date: Date;
  status: string;
  register_date: Date;
  building: Building;
}

export type PartialEvent = Partial<Event>;
