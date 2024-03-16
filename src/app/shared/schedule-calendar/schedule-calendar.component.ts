import { Component } from '@angular/core';
import { NgCalendarModule } from 'ionic2-calendar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'schedule-calendar',
  standalone: true,
  imports: [NgCalendarModule],
  template: ` <calendar></calendar>`,
  styles: ``,
})
export class ScheduleCalendarComponent {}
