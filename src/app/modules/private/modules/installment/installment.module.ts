import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';

@NgModule({
  declarations: [InstallmentComponent],
  imports: [CommonModule, InstallmentRoutingModule],
})
export class InstallmentModule {}
