import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallmentComponent } from './installment.component';

const routes: Routes = [{ path: '', component: InstallmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallmentRoutingModule {}
