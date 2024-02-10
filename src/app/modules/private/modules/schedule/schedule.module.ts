import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, HeaderPageComponent],
})
export class ScheduleModule {}
