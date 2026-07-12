import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {LoginUser} from '../../models/login-user';
import {Observable} from 'rxjs';
import {IS_AUTH_REQUIRED} from '../../../../../shell/src/app/constants/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7102/api/auth';
  private http = inject(HttpClient);

  loginUser(loginUser: LoginUser): Observable<string> {
    return this.http.post(`${this.apiUrl}/login`, loginUser, {
      withCredentials: true,
      context: new HttpContext().set(IS_AUTH_REQUIRED, true),
      responseType: 'text'
    });
  }
}
