import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemainingSubjectRoutingModule } from './remaining-subject-routing.module';
import { RemainingSubjectComponent } from './remaining-subject.component';

@NgModule({
  declarations: [RemainingSubjectComponent],
  imports: [CommonModule, RemainingSubjectRoutingModule],
})
export class RemainingSubjectModule {}
