import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public search: FormControl = new FormControl();
  public filteredCourse: Course[] = [];

  constructor(
    public coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.filteredCourse = this.coursesService.courses;

    this.search.valueChanges.subscribe(
      res => {
        this.filteredCourse = this.coursesService.courses.filter(course => {
          return res ? course.title.includes(res) : true;
        });
      }
    );
  }
}
