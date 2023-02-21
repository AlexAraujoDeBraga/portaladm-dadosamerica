import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/model/news';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.sass']
})
export class ListarNoticiaComponent implements OnInit, OnDestroy {

  singleModel?: number = 1; 
  news: INews[] = [];
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  request?: Subscription;
  showList: boolean = false;

  constructor(private newsService: NewsService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  }

  ngOnInit(): void {
    this.callRequest();
  }
  
  ngOnDestroy(): void {
    this.request?.unsubscribe;
  }
  
  callRequest() {
    this.showList = false;
    this.request = this.newsService.getNews().subscribe((data) => {
      this.news = data;
      this.showList = true;
    });
  }

}
