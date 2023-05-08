import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  dataFromChild: string = '';

  @Input() data: any;

  getData(data: any) {
    this.dataFromChild = data;
    console.log(data);
  }
}
