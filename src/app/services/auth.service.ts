import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  login(data: any): Observable<Login> {
    return this._http.post<Login>('http://localhost:8000/api/login', data).pipe(
      tap(data => {
        localStorage.setItem('user', JSON.stringify(data));
      })
    );
  }

  getToken(): string {
    const user: Login = JSON.parse(localStorage.getItem('user')!);
    return user.token;
  }

  logOut() {
    this._router.navigateByUrl('auth/login');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
