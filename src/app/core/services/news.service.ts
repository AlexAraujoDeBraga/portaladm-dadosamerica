import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { INews } from 'src/app/shared/model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl="http://localhost:8080/noticia/"
  
  constructor(private http: HttpClient) { }

  getNews():Observable<INews[]>  {
    return this.http.get<INews[]>(`${this.baseUrl}all`);
  }

}
