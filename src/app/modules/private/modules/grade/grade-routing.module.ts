import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade.component';

const routes: Routes = [
  { path: '', component: GradeComponent },
  {
    path: 'subject',
    loadChildren: () => import('./modules/subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'subject-description',
    loadChildren: () =>
      import('./modules/subject-description/subject-description.module').then((m) => m.SubjectDescriptionModule),
  },
  {
    path: 'remaining-subject',
    loadChildren: () =>
      import('./modules/remaining-subject/remaining-subject.module').then((m) => m.RemainingSubjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeRoutingModule {}
