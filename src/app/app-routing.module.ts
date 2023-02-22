import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeAdminComponent } from './features/dashboardpage/home/home.component';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-home-page', component: HomeAdminComponent},
  // {path: 'admin-home-page', component: HomeAdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
