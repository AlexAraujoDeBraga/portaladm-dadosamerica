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
  
  constructor(private http: HttpClient) { }

  loginUser(user: User):Observable<object>  {
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  // configUrl = 'assets/config.json';

  // getConfig() {
  //   return this.http.get<User>(this.configUrl);
  // }

}
