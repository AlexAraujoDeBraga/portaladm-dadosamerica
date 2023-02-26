import { rendererTypeName } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Options } from 'ngx-bootstrap/positioning/models';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from '../../model/news';

@Component({
  selector: 'app-update-noticia-modal',
  templateUrl: './update-noticia-modal.component.html',
  styleUrls: ['./update-noticia-modal.component.sass']
})
export class UpdateNoticiaModalComponent implements OnInit {
  @Input() noticia?: INews;
  @Output() sendUpdateEvent = new EventEmitter<any>();
  @ViewChild('option') option?: Options;
  @ViewChild('dateValue') dateValue?: ElementRef;
  @ViewChild('resumeValue') resumeValue?: ElementRef;
  @ViewChild('textoValue') textoValue?: ElementRef;

  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  modalRef3?: BsModalRef;

  categorias?: Icategorias[] = [];
  noticiaUpdate?: NewsClass;
  noticiaObj?:INews;
  categoriaSelecionada: string = "";

  bsValue = new Date();

  linkNoticia: string = "";
  fonte: string = "";
  texto: string = "";
  resumo: string = "";
  urlImg: string = "";
  titulo: string = "";

  constructor(private modalService: BsModalService, private newsService: NewsService) {}

  ngOnInit(): void {
    this.categorias = [
      {value: 'América Latina'},
      {value: 'Artes'},
      {value: 'Brasil'},
      {value: 'Ciência'},
      {value: 'Economia'},
      {value: 'Natureza'},
      {value: 'Mundo'},
      {value: 'Política'},
      {value: 'Tecnologia'},
      {value: 'Violência'}
    ];

    this.titulo = String(this.noticia?.titulo),
    this.urlImg = String(this.noticia?.urlImg),
    this.resumo = String(this.noticia?.resumo),
    this.texto = String(this.noticia?.texto),
    this.fonte = String(this.noticia?.fonte),
    this.linkNoticia = String(this.noticia?.linkDaNoticia);

    this.noticiaUpdate = new NewsClass();
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

    this.updateNews();

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

  getValue(event: any) {
    if (event.target.value != 'Selecione...'){
      this.categoriaSelecionada = event.target.value;
    } else {
      this.categoriaSelecionada = '';
    }
    console.log(this.categoriaSelecionada);
  }

  formatarData (data: string): string {
    let dia = data.slice(0,2);
    let mes = data.slice(3,5);
    let ano = data.slice(6,10);

    return ano+"-"+mes+"-"+dia+"T13:09:48.341+00:00";
  }

  updateNews() {

    this.noticiaObj = {
      id: Number(this.noticia?.id),
      titulo: this.titulo,
      urlImg: this.urlImg,
      resumo: this.resumeValue?.nativeElement.value,
      texto: this.textoValue?.nativeElement.value,
      dataNoticia: this.formatarData(this.dateValue?.nativeElement.value),
      fonte: this.fonte,
      categoria: this.categoriaSelecionada,
      linkDaNoticia: this.linkNoticia,
    }

    console.log(this.noticiaObj);

    this.newsService.updateNews(this.noticiaObj).subscribe(() => {
      this.sendUpdateEvent.emit();
    });

  }

}

interface Icategorias {
  value: string;
}

class NewsClass {
  titulo?: string;
  urlImg?: string;
  resumo?: string;
  texto?: string;
  dataNoticia?: string;
  fonte?: string;
  categoria?: string;
  linkDaNoticia?: string;
}
