import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemainingSubjectComponent } from './remaining-subject.component';

const routes: Routes = [{ path: '', component: RemainingSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemainingSubjectRoutingModule {}
