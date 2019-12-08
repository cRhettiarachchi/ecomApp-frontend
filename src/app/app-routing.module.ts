import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './landing-page/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
