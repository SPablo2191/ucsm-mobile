import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarMode, NgCalendarModule, QueryMode, Step } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar';
import { Days } from 'src/app/project/interfaces/commission.schedule';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { ScheduleService } from 'src/app/project/services/python/schedule.service';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'schedule-calendar',
  standalone: true,
  imports: [NgCalendarModule, IonicModule, CommonModule],
  template: `
    <calendar
      [eventSource]="eventSource"
      [queryMode]="calendar.queryMode"
      [calendarMode]="calendar.mode"
      [currentDate]="calendar.currentDate"
      [step]="calendar.step"
      [preserveScrollPosition]="calendar.preserveScrollPosition"
      [startHour]="calendar.startHour"
      [scrollToHour]="calendar.scrollToHour"
      [dayviewShowCategoryView]="calendar.dayviewShowCategoryView"
      (onCurrentDateChanged)="onCurrentDateChanged($event)"
      (onEventSelected)="onEventSelected($event)"
      (onTitleChanged)="onViewTitleChanged($event)"
      (onTimeSelected)="onTimeSelected($event)"
      (onDayHeaderSelected)="onDayHeaderSelected($event)"
      [weekviewNormalEventTemplate]="weekEvents"
    >
    </calendar>
    <ng-template #weekEvents let-displayEvent="displayEvent">
      <div
        class="calendar-event-inner"
        [style.backgroundColor]="'#05be6a'"
        [style.color]="' #fdfefe '"
        [style.fontSize]="'12px'"
        [style.top]="37 * displayEvent.startOffset + 'px'"
        [style.left]="(100 / displayEvent.overlapNumber) * displayEvent.position + '%'"
        [style.width]="100 / displayEvent.overlapNumber + '%'"
        [style.height]="37 * (displayEvent.endIndex - displayEvent.startIndex) - 4 + 'px'"
      >
        {{ displayEvent.event.title }}
      </div>
    </ng-template>
  `,
  styles: `
.weekview-with-event,.weekview-current, .calendar-event-inner{
    background-color: #05be6a !important;
}`,
})
export class ScheduleCalendarComponent implements OnInit {
  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;
  calendarModes: CalendarMode[] = ['day', 'week'];
  @Input() subjects!: PartialSubjectRegistration[];

  eventSource: any = [];
  viewTitle: any;

  isToday: boolean;
  calendar = {
    mode: 'week' as CalendarMode,
    queryMode: 'local' as QueryMode,
    step: 30 as Step,
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      },
    },
    formatDay: "'Day' dd",
    formatDayHeader: "'Day' EEE",
    formatDayTitle: "'Day' MMMM dd, yyyy",
    formatWeekTitle: "'Week' w",
    formatWeekViewDayHeader: "'Day' EEE d",
    formatHourColumn: "'hour' ha",
    showEventDetail: false,
    startingDayMonth: 2,
    startingDayWeek: 2,
    noEventsLabel: 'None',
    timeInterval: 15,
    autoSelect: false,
    locale: 'zh-CN',
    dir: 'rtl',
    scrollToHour: 11,
    preserveScrollPosition: true,
    lockSwipeToPrev: true,
    lockSwipeToNext: true,
    lockSwipes: true,
    startHour: 3,
    endHour: 16,
    sliderOptions: {
      spaceBetween: 10,
    },

    dayviewShowCategoryView: true,
  };

  constructor(
    private router: Router,
    private scheduleService: ScheduleService,
  ) {
    this.isToday = false;
  }
  ngOnInit(): void {
    this.loadEvents();
  }
  loadEvents() {
    if (this.subjects === undefined) return;
    this.subjects?.forEach((subject) => {
      let startDate = this.scheduleService.getDateOfWeekday(
        subject.student_commissions?.[0].commission?.commission_schedule?.day || Days.MONDAY,
        subject.student_commissions?.[0].commission?.commission_schedule?.start_time?.toString() || '',
      );
      let endDate = this.scheduleService.getDateOfWeekday(
        subject.student_commissions?.[0].commission?.commission_schedule?.day || Days.MONDAY,
        subject.student_commissions?.[0].commission?.commission_schedule?.end_time?.toString() || '',
      );
      console.log(startDate);
      this.eventSource.push({
        title: subject.subject?.name,
        startTime: startDate,
        endTime: endDate,
        allDay: false,
      });
    });
  }

  loadDynamicEvents() {
    let startTime = new Date('2023-01-20T03:00:40');
    let endTime = new Date('2023-01-22T05:39:22');

    this.eventSource.push({
      title: 'test',
      startTime: startTime,
      endTime: endTime,
      allDay: false,
    });
    this.myCalendar.loadEvents();
  }

  onViewTitleChanged(title: string) {
    this.viewTitle = title;
    // console.log('view title changed: ' + title + ', this.viewTitle: ' + this.viewTitle);
  }

  onEventSelected(event: any) {
    let subjectRegistration = this.subjects.find((subject) => subject.subject?.name === event?.title);
    if (subjectRegistration) {
      this.goToSubjectDescription(subjectRegistration);
    }
  }
  goToSubjectDescription(subject: PartialSubjectRegistration) {
    localStorage.setItem('subjectSelected', JSON.stringify(subject));
    this.router.navigate(['/private/career/grade/subject-description']);
  }

  changeMode(event: any) {
    this.calendar.mode = event.detail.value;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev: any) {}

  onCurrentDateChanged(ev: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    ev.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === ev.getTime();
  }

  onDayHeaderSelected = (ev: { selectedTime: Date; events: any[]; disabled: boolean }) => {};

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
}
