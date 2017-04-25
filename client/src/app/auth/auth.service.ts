import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http, public authHttp: AuthHttp) {}

  login(credentials) {
    this.http.post('/api/authenticate', credentials)
      .map(res => res.json())
      .subscribe(
        data => localStorage.setItem('id_token', data.id_token),
        error => console.log(error)
      );
  }

}
