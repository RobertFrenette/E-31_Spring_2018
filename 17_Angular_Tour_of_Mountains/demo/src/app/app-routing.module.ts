import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MountainsComponent } from './mountains/mountains.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MountainDetailComponent }  from './mountain-detail/mountain-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MountainDetailComponent },
  { path: 'mountains', component: MountainsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}