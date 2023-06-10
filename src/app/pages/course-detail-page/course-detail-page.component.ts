import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit {

  public courseId!: any;
  public course: Course[] = [];

  public similarCourses: Course[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
  }

  private _filter() {
  }
}
