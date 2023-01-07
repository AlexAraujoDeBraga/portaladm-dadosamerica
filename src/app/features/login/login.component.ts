import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Input } from '@angular/compiler/src/core';
import { User } from 'src/app/shared/model/user';
import { NgForm } from '@angular/forms';
import { LoginAdminService } from 'src/app/core/services/login-admin.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private loginService: LoginAdminService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  
    console.log(f.valid);

    this.loginService.loginUser(this.user).subscribe(data => {
      
      if (data == null) {
        alert("You haven´t permission for access");
      } else {
        alert("Login Sucesso");
      }

    }, error => alert("You haven´t permission for access"));
  }

}
