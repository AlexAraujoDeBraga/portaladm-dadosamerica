import { rendererTypeName } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from '../../model/news';

@Component({
  selector: 'app-update-noticia-modal',
  templateUrl: './update-noticia-modal.component.html',
  styleUrls: ['./update-noticia-modal.component.sass']
})
export class UpdateNoticiaModalComponent implements OnInit {
  @Input() noticia?: INews;
  @ViewChild("inputResumo") inputResumo!: ElementRef;
  
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  modalRef3?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  ngOnInit(): void {
    this.inputResumo.nativeElement.value = "oi";
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {id: 2, class: 'second' });
  }

  openModal3(template: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template, {id: 3, class: 'third' });
    this.modalService.hide(1);
    this.modalService.hide(2);
  }

  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
 
    this.modalRef.hide();
    this.modalRef = null;
  }

  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }

  closeModals(){
    this.modalService.hide(3);
  }

  
  

}
