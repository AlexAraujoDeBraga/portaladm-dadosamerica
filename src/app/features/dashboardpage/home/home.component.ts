import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



}
