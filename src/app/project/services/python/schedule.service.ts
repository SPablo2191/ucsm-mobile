import { Injectable } from '@angular/core';
import { Days } from '../../interfaces/commission.schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}
  dayIndexMap: { [key in Days]: number } = {
    [Days.MONDAY]: 1,
    [Days.TUESDAY]: 2,
    [Days.WEDNESDAY]: 3,
    [Days.THURSDAY]: 4,
    [Days.FRIDAY]: 5,
    [Days.SATURDAY]: 6,
    [Days.SUNDAY]: 0,
  };

  parseTime(time: string): { hours: number; minutes: number; seconds: number } {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return { hours, minutes, seconds };
  }

  getDateOfWeekday(day: Days, time: string): Date {
    const { hours, minutes, seconds } = this.parseTime(time);
    const today = new Date();
    const currentDay = today.getDay();
    const targetDay = this.dayIndexMap[day];

    // Calculate the difference in days to the target day
    const dayDifference = (targetDay + 7 - currentDay) % 7;

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + dayDifference);
    targetDate.setHours(hours, minutes, seconds, 0);

    return targetDate; // Format: DD/MM/YYYY HH:mm:ss
  }
}
