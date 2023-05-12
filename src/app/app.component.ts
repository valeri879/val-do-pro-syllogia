import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public color: string = 'red';

  public names: string[] = [
    'Val',
    'Armazi',
    'Mariami',
    'Dato'
  ];

  ngOnInit(): void {
    
  }
}
