import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectDescriptionRoutingModule } from './subject-description-routing.module';
import { SubjectDescriptionComponent } from './subject-description.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SubjectDescriptionComponent],
  imports: [CommonModule, SubjectDescriptionRoutingModule, IonicModule],
})
export class SubjectDescriptionModule {}
