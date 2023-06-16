import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'მთავარი' },
  { path: 'profile', component: ProfilePageComponent, title: 'პროფილი' },
  { path: 'blog', component: BlogPageComponent, title: 'ბლოგი' },
  { path: 'courses', component: CoursesPageComponent, title: 'კურსები' },
  { path: 'courses/:id', component: CourseListPageComponent, title: 'კურსების სია' },
  { path: 'course/detail/:id', component: CourseDetailPageComponent },
  { 
    path: 'auth',
    component: AuthPageComponent,
    title: 'ავტორიზაცია',
    canActivate: [loginGuard],
    children: [
      { path: 'login', component: LoginPageComponent, title: 'შესვლა' },
      { path: 'sign-up', component: SignUpPageComponent, title: 'რეგისტრაცია' },
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: NotFoundPageComponent, title: '404' },
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
