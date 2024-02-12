import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './grade.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';
import { UiChartComponent } from 'src/app/shared/ui/ui-chart/ui-chart.component';
import { IonicModule } from '@ionic/angular';
import { SubjectSimpleCardComponent } from 'src/app/shared/cards/subject-simple-card/subject-simple-card.component';

@NgModule({
  declarations: [GradeComponent],
  imports: [
    CommonModule,
    GradeRoutingModule,
    HeaderPageComponent,
    UiChartComponent,
    IonicModule,
    SubjectSimpleCardComponent,
  ],
})
export class GradeModule {}
