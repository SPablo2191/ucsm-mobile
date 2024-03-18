export interface CommissionSchedule {
  id?: string;
  start_time?: string;
  end_time?: string;
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
