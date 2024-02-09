import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerProfileRoutingModule } from './career-profile-routing.module';
import { CareerProfileComponent } from './career-profile.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CareerProfileComponent],
  imports: [CommonModule, CareerProfileRoutingModule, IonicModule],
})
export class CareerProfileModule {}
