import { Component, OnInit } from '@angular/core';
import { LoginAdminService } from 'src/app/core/services/login-admin.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.sass']
})
export class AdminHeaderComponent implements OnInit {

  usuarioOn?: User;

  constructor(private loginAdminService: LoginAdminService) { }

  ngOnInit(): void {
    this.getUserOnSession();
  }

  private getUserOnSession() {
    this.usuarioOn = this.loginAdminService.getUser();
  }

}
