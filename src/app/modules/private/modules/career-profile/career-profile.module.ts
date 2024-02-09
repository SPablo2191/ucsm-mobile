import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerProfileRoutingModule } from './career-profile-routing.module';
import { CareerProfileComponent } from './career-profile.component';

@NgModule({
  declarations: [CareerProfileComponent],
  imports: [CommonModule, CareerProfileRoutingModule],
})
export class CareerProfileModule {}
