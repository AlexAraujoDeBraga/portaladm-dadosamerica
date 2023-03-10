import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
