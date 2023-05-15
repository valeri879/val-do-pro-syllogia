import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public fontSizePx: number = 16;

  ngOnInit(): void {
    
  }

  submit(val: string) {
    console.log(val);
  }

}
