import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public courses: Course[] = [
    {
      id: 1,
      title: 'Javascript',
      descr: 'Course about js and more...',
      img: 'https://val-do.com/uploads/1668373202545.jpg'
    },
    {
      id: 2,
      title: 'Angular',
      descr: 'Course about angular and more...',
      img: 'https://val-do.com/uploads/1667423509538.jpg'
    },
    {
      id: 3,
      title: 'ReactJS',
      descr: 'Course about reactjs and more...',
      img: 'https://val-do.com/uploads/1667493799156.jpg'
    },
  ];

  constructor() { }
}
