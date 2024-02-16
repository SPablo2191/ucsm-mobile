import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiTabsComponent } from 'src/app/shared/ui/ui-tabs/ui-tabs.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  {
    path: 'career',
    component: UiTabsComponent,
    children: [
      {
        path: 'career-profile',
        loadChildren: () => import('./modules/career-profile/career-profile.module').then((m) => m.CareerProfileModule),
      },
      {
        path: 'schedule',
        loadChildren: () => import('./modules/schedule/schedule.module').then((m) => m.ScheduleModule),
      },
      {
        path: 'installment',
        loadChildren: () => import('./modules/installment/installment.module').then((m) => m.InstallmentModule),
      },
      { path: 'grade', loadChildren: () => import('./modules/grade/grade.module').then((m) => m.GradeModule) },
    ],
  },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
