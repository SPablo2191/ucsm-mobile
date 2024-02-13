import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { UiDropdownComponent } from 'src/app/shared/ui/ui-dropdown/ui-dropdown.component';

@NgModule({
  declarations: [SubjectComponent],
  imports: [CommonModule, SubjectRoutingModule, IonicModule, CardContainerComponent, UiDropdownComponent],
})
export class SubjectModule {}
