import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';

@NgModule({
  declarations: [EventComponent],
  imports: [CommonModule, EventRoutingModule, IonicModule, CardContainerComponent],
})
export class EventModule {}
