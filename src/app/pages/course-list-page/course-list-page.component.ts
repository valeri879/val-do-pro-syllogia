import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
  
  public courseList$!: Observable<any>;
  id!: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _coursesService: CoursesService
  ) {}
  
  ngOnInit(): void {

    this._route.params.subscribe(
      params => {
        this.id = params['id'];
        console.log(params);
      }
    );

    this._coursesService.getCoursesList(this.id).subscribe(
      data => {
        console.log(data)
      }
    )
  
    this.courseList$ = this._route.params.pipe(
      switchMap(params => {
        console.log(params);
        return this._coursesService.getCoursesList(params['id']);
      })
    );

  //  this.courseList$ = this._coursesService.getCoursesList('620135ec045b728393d6c614');
  }
}
