import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './grade.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';

@NgModule({
  declarations: [GradeComponent],
  imports: [CommonModule, GradeRoutingModule, HeaderPageComponent],
})
export class GradeModule {}
