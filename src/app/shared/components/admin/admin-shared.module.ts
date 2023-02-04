import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ListarNoticiaComponent } from './noticia/listar-noticia/listar-noticia.component';
import { UpdateNoticiaComponent } from './noticia/update-noticia/update-noticia.component';
import { CreateNoticiaComponent } from './noticia/create-noticia/create-noticia.component';
import { DeleteNoticiaComponent } from './noticia/delete-noticia/delete-noticia.component';
import { ModalSharedModule } from '../../modal/modal-shared.module';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    SidebarMenuComponent,
    ListarNoticiaComponent,
    UpdateNoticiaComponent,
    CreateNoticiaComponent,
    DeleteNoticiaComponent
  ],
  exports: [
    AdminHeaderComponent,
    SidebarMenuComponent,
    ListarNoticiaComponent,
    UpdateNoticiaComponent,
    CreateNoticiaComponent,
    DeleteNoticiaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModalSharedModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    BsDropdownModule.forRoot()
  ]
})
export class AdminSharedModule { }
