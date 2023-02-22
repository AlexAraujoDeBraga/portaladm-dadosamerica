import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/model/news';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @Output() sendNoticiasPorPagina = new EventEmitter<any>();

  noticiasPorPagina: INews[] = [];
  itemsPorPagina: number = 3;
  iterator: number = 0;
  public selectedPage = 1;

  news: INews[] = [];
  request?: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.request = this.newsService.getNews().subscribe((data) => {
      this.news = data;
    });
  }

  ngAfterViewInit(): void {

  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value
    this.itemsPorPagina = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.news.length / this.itemsPorPagina))
      .fill(0).map((x,i) => i+1);
  }

  changePage(page: any){
    this.selectedPage = page;
    this.slicedItems();
  }

  onNext(value: number) {
    this.iterator = this.selectedPage + value;
    if (this.iterator <= this.pageNumbers.length) {
      this.selectedPage = this.selectedPage + value;
      this.slicedItems();
    } else {
      this.iterator = this.iterator -1;
    }
  }

  onNextAll() {
    this.selectedPage = this.pageNumbers.length;
    this.slicedItems();
  }

  onPrev(value: number) {
    this.iterator = this.selectedPage + value;
    if (this.iterator >= 0 && this.selectedPage > 1) {
        this.selectedPage = this.selectedPage + value;
        this.slicedItems();
    } else {
      this.iterator = this.iterator + 1;
    }
  }

  onPrevAll() {
    this.selectedPage = 1;
    this.slicedItems();
  }

  slicedItems() {
    let pageIndex = (this.selectedPage - 1) * this.itemsPorPagina;
    let endIndex = (this.selectedPage - 1) * this.itemsPorPagina + this.itemsPorPagina;
    this.noticiasPorPagina = [];
    this.noticiasPorPagina = this.news.slice(pageIndex, endIndex);
    this.sendNoticiasPorPagina.emit(this.noticiasPorPagina);
  }

}
