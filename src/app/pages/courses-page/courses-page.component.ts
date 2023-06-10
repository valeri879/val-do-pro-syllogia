import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public categories$!: Observable<any>;
  public search: FormControl = new FormControl();

  constructor(
    public coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.coursesService.getCategories();
  }
}
