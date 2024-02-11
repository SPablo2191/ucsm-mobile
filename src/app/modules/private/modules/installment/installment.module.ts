import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';
import { HeaderPageComponent } from 'src/app/shared/header-page/header-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InstallmentComponent],
  imports: [CommonModule, InstallmentRoutingModule, HeaderPageComponent, IonicModule],
})
export class InstallmentModule {}
