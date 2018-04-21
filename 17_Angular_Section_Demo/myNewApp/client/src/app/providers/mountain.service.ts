import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MountainService {

  apiurl = environment.apiurl;

  constructor(private http: HttpClient) { }

  getMountainsObj() {
    return this.http.get(this.apiurl + 'mountains');
  }

}