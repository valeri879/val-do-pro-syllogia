import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { HttpClient } from '@angular/common/http';

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

  getCoursesList(id: string | number) {
    return this._http.get(`http://localhost:8000/api/courses/${id}`);
  }
}
