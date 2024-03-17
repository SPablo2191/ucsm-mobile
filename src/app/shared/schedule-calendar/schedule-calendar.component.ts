import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CalendarMode, NgCalendarModule, QueryMode, Step } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'schedule-calendar',
  standalone: true,
  imports: [NgCalendarModule, IonicModule, CommonModule],
  template: ` <ion-row ion-content>
      <ion-col>
        <ion-select placeholder="Cambiar Configuración">
          <ion-select-option [value]="mode" *ngFor="let mode of calendarModes">{{ mode }}</ion-select-option>
        </ion-select>
      </ion-col>
    </ion-row>
    <ion-title slot="start">{{ viewTitle }}</ion-title>
    <ion-buttons slot="end">
      <ion-button [disabled]="isToday" (click)="today()">Today</ion-button>
      <ion-button (click)="changeMode('month')">M</ion-button>
      <ion-button (click)="changeMode('week')">W</ion-button>
      <ion-button (click)="changeMode('day')">D</ion-button>
      <ion-button (click)="loadEvents()">Load</ion-button>
    </ion-buttons>
    <calendar
      [eventSource]="eventSource"
      [queryMode]="calendar.queryMode"
      [calendarMode]="calendar.mode"
      [currentDate]="calendar.currentDate"
      [step]="calendar.step"
      [preserveScrollPosition]="calendar.preserveScrollPosition"
      [startHour]="calendar.startHour"
      [scrollToHour]="calendar.scrollToHour"
      [dayviewCategorySource]="calendar.dayviewCategorySource"
      [dayviewShowCategoryView]="calendar.dayviewShowCategoryView"
      (onCurrentDateChanged)="onCurrentDateChanged($event)"
      (onEventSelected)="onEventSelected($event)"
      (onTitleChanged)="onViewTitleChanged($event)"
      (onTimeSelected)="onTimeSelected($event)"
      (onDayHeaderSelected)="onDayHeaderSelected($event)"
    >
    </calendar>`,
  styles: ``,
})
export class ScheduleCalendarComponent {
  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;
  calendarModes: CalendarMode[] = ['day', 'week'];

  constructor() {
    this.isToday = false;
  }

  randomNameList = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hank',
    'Ivy',
    'Jack',
    'Karen',
    'Liam',
    'Max',
    'Nina',
    'Olivia',
    'Paul',
    'Quincy',
    'Rita',
    'Sara',
    'Tina',
  ];

  eventSource: any = [];
  viewTitle: any;

  isToday: boolean;
  calendar = {
    mode: 'month' as CalendarMode,
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
    allDayLabel: 'testallday',
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
    dayviewCategorySource: new Set(this.randomNameList),
    dayviewShowCategoryView: true,
  };

  loadEvents() {
    this.eventSource = this.createRandomEvents();
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
    console.log('view title changed: ' + title + ', this.viewTitle: ' + this.viewTitle);
  }

  onEventSelected(event: any) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title + ',' + event.categoryId);
  }

  changeMode(mode: any) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev: any) {
    console.log(
      'Selected time: ' +
        ev.selectedTime +
        ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) +
        ', disabled: ' +
        ev.disabled +
        ', categoryId: ' +
        ev.category?.categoryId +
        ', categoryName: ' +
        ev.category?.categoryName,
    );
  }

  onCurrentDateChanged(ev: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    ev.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === ev.getTime();
    console.log('Currently viewed date: ' + ev);
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 100; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute,
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute,
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }

      const categorySource = [...this.calendar.dayviewCategorySource];
    }
    return events;
  }

  onRangeChanged(ev: any) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    this.eventSource = this.createRandomEvents();
  }

  onDayHeaderSelected = (ev: { selectedTime: Date; events: any[]; disabled: boolean }) => {
    console.log(
      'Selected day: ' +
        ev.selectedTime +
        ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) +
        ', disabled: ' +
        ev.disabled,
    );
  };

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
}
