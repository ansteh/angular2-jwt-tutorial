import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  onLogin(credentials: Credentials) {
    console.log(credentials);
    this.auth.login(credentials);
  }
}
