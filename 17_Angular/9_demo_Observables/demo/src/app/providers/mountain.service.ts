import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Mountain } from './../models/mountain.model';

@Injectable()
export class MountainService {

  mountains: Mountain[] = [];
  
	private usersEndpoint: string = 'http://localhost:3000/mountains/';
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  getMountains() : Observable<any> {
    return this.http.get(this.usersEndpoint, this.options)
      .map(res => <any[]>res.json());
  }
}
