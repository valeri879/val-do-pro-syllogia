import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastName: string;
}

@Injectable(
  //{providedIn: 'root'}
)
export class TestService {
  
  private city: string = 'Tbilisi';

  public users: User[] = [
    { name: 'Val', lastName: 'Do' },
    { name: 'Giga', lastName: 'Arabuli' },
    { name: 'Kote', lastName: 'Arabuli' },
  ];

  constructor() { }

  public fullName(name: string, lastName: string) {
    return `${name} ${lastName}`;
  }
}