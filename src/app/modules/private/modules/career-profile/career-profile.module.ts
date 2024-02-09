import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerProfileRoutingModule } from './career-profile-routing.module';
import { CareerProfileComponent } from './career-profile.component';
import { IonicModule } from '@ionic/angular';
import { TabCardComponent } from 'src/app/shared/cards/tab-card/tab-card.component';

@NgModule({
  declarations: [CareerProfileComponent],
  imports: [CommonModule, CareerProfileRoutingModule, IonicModule, TabCardComponent],
})
export class CareerProfileModule {}
