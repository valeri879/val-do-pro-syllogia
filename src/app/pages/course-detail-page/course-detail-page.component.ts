import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { Course } from 'src/app/interfaces/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.css']
})
export class CourseDetailPageComponent implements OnInit {

  public course$!: Observable<any>;
  public id!: string;

  constructor(
    private _route: ActivatedRoute,
    private _coursesService: CoursesService
  ) { 
    const x = {
      name: 1
    }

    const y = {
      lastName: 2
    }

    const z = {
      ...x,
      similarCourses:[]
    }

    // console.log(z);
  }

  ngOnInit(): void {

/*     this._route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );

    this.course$ = this._coursesService.getCourse(this.id); */


    this.course$ = this._route.params.pipe(
      switchMap(params => {
        return this._coursesService.getCourse(params['id']).pipe(
          switchMap(
            course => {
              console.log(course);
              return this._coursesService.getCoursesList(course['category']).pipe(
                map(coursesList => {
                  return {
                    ...course,
                    similarCourses: coursesList
                  }
                })
              )
          })
        );
      })
    );
  }

}
