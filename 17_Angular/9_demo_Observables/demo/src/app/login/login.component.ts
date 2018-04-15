import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName: string = '';
  private password: string = '';
  private errMsg: string = '';
  private loginError: boolean = false;
    
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  
  navigateHome() {
    this.router.navigate(['/']);
  }
  
  onLogin(): void {
    this.loginError = false;
    if (this.userName === '' || this.password === '') {
      this.errMsg = 'User Name and Password are required.';
      this.loginError = true;
    } else {
      // call login() method in AuthService to validate login creds
      this.authService.login(this.userName, this.password).subscribe(data => {
        if (data.success === true) {
          // load mountains "page"
          this.router.navigate(['dashboard'], {queryParams: {userame: this.userName}});          
        } else {
          this.errMsg = 'Login unsuccessful.';
          this.loginError = true;
        }
      });
    }
  }
}