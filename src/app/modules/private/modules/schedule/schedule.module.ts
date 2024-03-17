import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';
import { IonicModule } from '@ionic/angular';
import { ScheduleCalendarComponent } from 'src/app/shared/schedule-calendar/schedule-calendar.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, IonicModule, HeaderPageComponent, ScheduleCalendarComponent],
})
export class ScheduleModule {}
