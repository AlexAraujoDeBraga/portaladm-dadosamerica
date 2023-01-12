import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeAdminComponent } from './features/dashboardpage/home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin-home-page', component: HomeAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
