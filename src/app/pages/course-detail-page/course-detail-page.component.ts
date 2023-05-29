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
    this.similarCourses = this._coursesService.courses;
    console.log(this._route.snapshot.params);
    // this.courseId = this._route.snapshot.params['id'];

    this._route.params.subscribe(
      params => {
        this.courseId = params['id'];
        this._filter();
        console.log(params)
      }
    )


    console.log(this.course);
  }

  private _filter() {
    this.course = this._coursesService.courses.filter(course => {
      return course.id == this.courseId;
    });
  }
}
