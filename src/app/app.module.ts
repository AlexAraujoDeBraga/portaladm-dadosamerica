import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { HomeAdminModule } from './features/dashboardpage/home/home.module';
import { LoginAdminService } from './core/services/login-admin.service';
import { AuthGuard } from './core/guards/auth-guard';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    HomeAdminModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [LoginAdminService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
