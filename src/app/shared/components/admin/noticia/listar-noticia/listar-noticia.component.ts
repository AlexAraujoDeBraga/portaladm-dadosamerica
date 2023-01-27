import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.sass']
})
export class ListarNoticiaComponent implements OnInit {

  singleModel?: number = 1; 

  constructor() { }

  ngOnInit(): void {
  }

}
