import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminSharedModule } from 'src/app/shared/components/admin/admin-shared.module';

@NgModule({
  declarations: [
    HomeAdminComponent,
  ],
  exports: [
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminSharedModule
  ]
})
export class HomeAdminModule { }