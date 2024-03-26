export interface CommissionSchedule {
  id?: string;
  start_time?: Date;
  end_time?: Date;
  day?: Days;
}

export type PartialCommissionSchedule = Partial<CommissionSchedule>;
export enum Days {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}
