import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectDescriptionComponent } from './subject-description.component';

const routes: Routes = [{ path: '', component: SubjectDescriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectDescriptionRoutingModule {}
