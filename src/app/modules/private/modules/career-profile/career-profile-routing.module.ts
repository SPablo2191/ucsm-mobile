import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerProfileComponent } from './career-profile.component';

const routes: Routes = [{ path: '', component: CareerProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareerProfileRoutingModule {}
