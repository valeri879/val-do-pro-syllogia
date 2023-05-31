import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CardComponent } from './components/card/card.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

console.log('App module is loaded...');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BlogPageComponent,
    CoursesPageComponent,
    CardComponent,
    CourseDetailPageComponent,
    AuthPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
