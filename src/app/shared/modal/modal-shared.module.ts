import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DeleteNoticiaModalComponent } from './delete-noticia-modal/delete-noticia-modal.component';
import { UpdateNoticiaModalComponent } from './update-noticia-modal/update-noticia-modal.component';

@NgModule({
  declarations: [
    DeleteNoticiaModalComponent,
    UpdateNoticiaModalComponent
  ],
  exports: [
    DeleteNoticiaModalComponent,
    UpdateNoticiaModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    BsDropdownModule.forRoot()
  ]
})
export class ModalSharedModule { }
