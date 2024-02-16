import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectDescriptionRoutingModule } from './subject-description-routing.module';
import { SubjectDescriptionComponent } from './subject-description.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { ClassroomDescriptionComponent } from './components/classroom-description/classroom-description.component';
import { PersonItemComponent } from 'src/app/shared/person-item/person-item.component';

@NgModule({
  declarations: [SubjectDescriptionComponent],
  imports: [
    CommonModule,
    SubjectDescriptionRoutingModule,
    IonicModule,
    CardContainerComponent,
    ClassroomDescriptionComponent,
    PersonItemComponent,
  ],
})
export class SubjectDescriptionModule {}
