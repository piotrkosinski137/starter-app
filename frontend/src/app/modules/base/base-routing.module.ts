import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  // {
  //   path: '', canActivate: [AuthGuard], children: [
  //     {
  //       path: 'worker',
  //       loadChildren: 'src/app/modules/worker/worker.module#WorkerModule'
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'worker/profile',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {
}
