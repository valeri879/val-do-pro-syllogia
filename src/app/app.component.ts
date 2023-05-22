import { Component, OnInit } from '@angular/core';
import { TestService, User } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public name: string = '';
  public lastName: string = '';

  public users: User[] = [];

  constructor(
    // private testService: TestService
  ) {}

  ngOnInit(): void {
/*     this.users = this.testService.users;
    console.log('this is parent component', this.testService.users);
    console.log('full name', this.testService.fullName('Val', 'Do')) */
  }

}
