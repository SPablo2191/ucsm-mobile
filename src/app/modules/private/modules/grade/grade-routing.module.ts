import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade.component';

const routes: Routes = [
  { path: '', component: GradeComponent },
  {
    path: 'subject/:title',
    loadChildren: () => import('./modules/subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'subject-description',
    loadChildren: () =>
      import('./modules/subject-description/subject-description.module').then((m) => m.SubjectDescriptionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeRoutingModule {}
