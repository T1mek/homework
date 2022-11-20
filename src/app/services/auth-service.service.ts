import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Registration, Token } from '../../models/models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  // login(model: Login): Observable<Token> {
  //   // return this.http.post<Token>(`${environment.url}/auth/jwt/create`, model);
  // }
}
