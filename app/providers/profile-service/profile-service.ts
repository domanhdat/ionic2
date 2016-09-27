import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from './../../config';

@Injectable()
export class ProfileService {

  constructor(private http: Http, private config: Config) {
  }

  public getProfile() {
    return new Promise(resolve => {
      this.http.get(this.config.apiRoot())
        .map(ProfileService.mapData)
        .subscribe(data => resolve(data));
    });
  }

  private static mapData(res) {
    let body = res.json();
    return body.data || {};
  }
}

