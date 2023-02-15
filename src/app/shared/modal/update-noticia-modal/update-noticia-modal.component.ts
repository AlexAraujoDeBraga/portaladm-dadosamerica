import { rendererTypeName } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('option') option?: Options;
  @ViewChild('dateValue') dateValue?: ElementRef;
  
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  modalRef3?: BsModalRef;

  categorias?: Icategorias[] = [];
  noticiaUpdate?: NewsClass;
  noticiaObj?:INews;
  categoriaSelecionada: string = "";

  bsValue = new Date();

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

    return ano+"-"+mes+"-"+dia;
  }
  
  updateNews() {

    this.noticiaObj = {
      id: Number(this.noticia?.id),
      titulo: String(this.noticia?.titulo),
      urlImg: String(this.noticia?.urlImg),
      resumo: String(this.noticia?.resumo),
      texto: String(this.noticia?.texto),
      dataNoticia: this.formatarData(this.dateValue?.nativeElement.value),
      fonte: String(this.noticia?.fonte),
      categoria: this.categoriaSelecionada,
      linkDaNoticia: String(this.noticia?.linkDaNoticia),
    }

    console.log(this.noticiaObj);

    this.newsService.updateNews(this.noticiaObj).subscribe(() => {
      // mandar um evento pra atualizar a página no home
      console.log(this.noticiaObj);
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