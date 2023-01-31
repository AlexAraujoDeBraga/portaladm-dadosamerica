import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAdminService } from 'src/app/core/services/login-admin.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'admin-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeAdminComponent implements OnInit {
  showNoticiaOption: boolean = false;
  usuario?: User;

  constructor(private router: Router, private loginAdminService: LoginAdminService) { }

  ngOnInit(): void {
    this.getUserOnSession();
  }

  private getUserOnSession() {
    this.usuario = this.loginAdminService.getUser();
  }

  getClickNoticia(e: boolean) {
    this.showNoticiaOption = e;
  }

}
