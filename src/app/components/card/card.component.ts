import { Component, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data!: Course;
}
