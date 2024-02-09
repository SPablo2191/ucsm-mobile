import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  {
    path: 'career-profile',
    loadChildren: () => import('./modules/career-profile/career-profile.module').then((m) => m.CareerProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
