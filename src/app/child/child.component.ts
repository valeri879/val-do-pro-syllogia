import { Component, Input, Output } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() data!: Card;
}
