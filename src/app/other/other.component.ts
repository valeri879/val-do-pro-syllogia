import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {

  @Output() data: EventEmitter<any> = new EventEmitter();

  send() {
    this.data.emit('this is data from other component');
    console.log('click')
  }
}
