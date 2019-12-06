import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './landing-page/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
