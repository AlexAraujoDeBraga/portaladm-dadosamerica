import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/model/news';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.sass']
})
export class ListarNoticiaComponent implements OnInit {

  singleModel?: number = 1; 
  news: INews[] = [];
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;

  constructor(private newsService: NewsService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }

}
