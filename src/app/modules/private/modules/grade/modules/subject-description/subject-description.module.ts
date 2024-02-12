import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectDescriptionRoutingModule } from './subject-description-routing.module';
import { SubjectDescriptionComponent } from './subject-description.component';

@NgModule({
  declarations: [SubjectDescriptionComponent],
  imports: [CommonModule, SubjectDescriptionRoutingModule],
})
export class SubjectDescriptionModule {}
