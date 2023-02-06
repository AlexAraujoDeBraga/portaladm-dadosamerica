import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})

export class LoginAdminService {
  private baseUrl="http://localhost:8080/api/login"
  usuario?: User;
  constructor(private http: HttpClient) { }

  loginUser(user: User):Observable<User>  {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  setUser(usuarioRecebido: User) {
    this.usuario = usuarioRecebido;
  }

  getUser() {
    return this.usuario;
  }

  // configUrl = 'assets/config.json';

  // getConfig() {
  //   return this.http.get<User>(this.configUrl);
  // }

}
