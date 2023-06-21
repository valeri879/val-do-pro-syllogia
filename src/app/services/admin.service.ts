import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  isAdmin(): boolean {
    const isAdmin: boolean = JSON.parse(localStorage.getItem('admin')!);
    if (isAdmin) return true;
    return false;
  }
}
