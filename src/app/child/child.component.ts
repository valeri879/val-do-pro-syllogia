import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(this.size --);
  }

  inc() {
    this.resize(this.size ++);
  }

  resize(i: number) {
    this.sizeChange.emit(i);
  }
}
