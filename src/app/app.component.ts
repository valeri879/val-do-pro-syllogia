import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'syllogia-pro-lessons';

  public user = {
    name: 'Val',
    lastName: 'Do'
  }

  isMerried: boolean = true;
}
