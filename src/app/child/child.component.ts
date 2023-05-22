import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [TestService]
})
export class ChildComponent implements OnInit {
  public query!: string;

  constructor(public testService: TestService) {
  }

  ngOnInit(): void {
    console.log(console.log(this.query));
  }

}
