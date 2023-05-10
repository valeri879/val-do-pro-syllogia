import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'syllogia-pro-lessons';
  
  public data: Card[] = [
    { 
      imgUrl: 'https://val-do.com/uploads/1667423509538.jpg',
      title: 'Angular-ის კურსი',
      descr: 'Angular-ის კურსი დამწყებთათვის'
    },
    { 
      imgUrl: 'https://val-do.com/uploads/1668373202545.jpg',
      title: 'JavaScript-ის კურსი',
      descr: 'Angular-ის კურსი დამწყებთათვის'
    },
    { 
      imgUrl: 'https://val-do.com/uploads/1667423488952.jpg',
      title: 'HTML-ის კურსი',
      descr: 'Angular-ის კურსი დამწყებთათვის'
    },
  ]

  public isActive: boolean = false;

  public x: number = 1;

  public user = {
    name: 'Val',
    lastName: 'Do'
  }

  public numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  isMerried: boolean = true;

  ngOnInit(): void {
/*     for(let number of this.numbers) {
      console.log(number);
    } */
  }
}
