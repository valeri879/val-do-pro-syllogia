import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(
    private _http: HttpClient
  ) { }

  getCategories() {
    return this._http.get(`http://localhost:8000/api/categories`);
  }

  getCoursesList(id: string | number): Observable<any[]> {
    return this._http.get<any[]>(`http://localhost:8000/api/courses/${id}`);
  }

  getCourse(id: string): Observable<any> {
    return this._http.get<any>(`http://localhost:8000/api/courses/detail/${id}`).pipe(
      map(res => res['data'])
    );
  }
}
