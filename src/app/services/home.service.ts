import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { Blog } from '../interfaces/blog';
import { Review } from '../interfaces/review';

export interface Home {
  categories: Category[];
  reviews: Review[];
  blogs: Blog[];
  lastBlogs: Blog[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  public getHomeData(): Observable<Home> {
    return this._http.get<Home>('http://localhost:8000/api');
  }
}
