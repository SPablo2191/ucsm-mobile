import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';

@NgModule({
  declarations: [SubjectComponent],
  imports: [CommonModule, SubjectRoutingModule, IonicModule, CardContainerComponent],
})
export class SubjectModule {}
