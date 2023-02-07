import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Input } from '@angular/compiler/src/core';
import { User } from 'src/app/shared/model/user';
import { NgForm } from '@angular/forms';
import { LoginAdminService } from 'src/app/core/services/login-admin.service';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = false;
  loginMessage:  boolean = false;

  constructor(private loginService: LoginAdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  
    console.log(f.valid);

    this.loginService.loginUser(this.user).subscribe((data: User) => {
      
      if (data == null) {
        this.hide = true;
      } else {
        this.hide = false;
        this.loginMessage = true;

        setTimeout(() => {
          this.loginMessage = false;
          this.user = data;
          this.loginService.setUser(this.user);
          this.router.navigateByUrl('/admin-home-page');
        }, 1000)

      }

    }, error => this.hide = true);
  }

}
