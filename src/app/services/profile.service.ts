import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) { }

  getProfile(): Observable<any> {
    return this._http.get(`http://localhost:8000/api/user`);
  }
}
