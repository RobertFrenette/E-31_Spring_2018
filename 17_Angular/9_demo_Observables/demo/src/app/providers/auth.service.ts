import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  private usersEndpoint: string = 'http://localhost:3000/login/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http) {}

  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, {user_name : userName, user_password : password}, this.options)
      .map(res => <any[]>res.json());
  }
}
