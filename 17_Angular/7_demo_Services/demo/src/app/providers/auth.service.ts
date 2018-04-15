import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';

  constructor() { }

  login(userName: string, password: string) {
    if (userName === this.USER_NAME && password === this.PASSWORD) {
      console.log('AuthService: Login successful!');
      return  true;
    } else {
      console.log('AuthService: Login failed!');
      return false;
    }
  }
}
