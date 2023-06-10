import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Home, HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  
  public data$!: Observable<Home>;
  counter: number = 0;

  timer: any;
  subscription!: Subscription;

  constructor(
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.data$ = this._homeService.getHomeData();

    this.timer = setInterval(() => {
      console.log(this.counter++);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
