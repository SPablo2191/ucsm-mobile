import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './grade.component';

@NgModule({
  declarations: [GradeComponent],
  imports: [CommonModule, GradeRoutingModule],
})
export class GradeModule {}
