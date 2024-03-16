import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, IonicModule, HeaderPageComponent],
})
export class ScheduleModule {}
