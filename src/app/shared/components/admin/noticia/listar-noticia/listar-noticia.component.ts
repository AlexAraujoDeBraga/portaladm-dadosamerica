import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/model/news';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.sass']
})
export class ListarNoticiaComponent implements OnInit, AfterViewInit, OnDestroy {

  singleModel?: number = 1;
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  showList: boolean = false;
  request?: Subscription;

  news: INews[] = [];

  constructor(
    private newsService: NewsService,
    private modalService: BsModalService,
    private router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
  }

  ngOnInit(): void {
    this.showList = false;
  }

  ngAfterViewInit(): void {
    this.request = this.newsService.getNews().subscribe((data) => {
      for (let x = 0; x < 3; x++) {
          this.news.push(data[x]);
      }
      this.showList = true;
    });
  }

  ngOnDestroy(): void {
    this.request?.unsubscribe;
  }

  callRequestAfterUpdate() {
    this.showList = false;
    this.news = [];
    this.request = this.newsService.getNews().subscribe((data) => {
      this.news = data;
      this.showList = true;
    });
  }

  getNoticiasPorPagina(noticias: INews[] = []) {
    this.showList = false;

    setTimeout(() => {
      this.news = noticias;
      this.showList = true;
    });

  }

  openCreateNoticia() {
    // this.showList = false;
    // this.router.navigateByUrl('/create-noticia');
  }

}
