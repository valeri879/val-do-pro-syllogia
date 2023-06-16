import { CanActivateFn, Router } from '@angular/router';
import { Login } from '../interfaces/login';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const user: Login = JSON.parse(localStorage.getItem('user')!);
  if (user) {
    router.navigateByUrl('/profile');
    return false;
  }
  return true;
};
