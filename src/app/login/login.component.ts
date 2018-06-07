import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../services/global.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };
  constructor(private router: Router, private globals: Globals, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    const login = this.authService.login(this.credentials);
    login.then((response) => {
      if (response)   {
        this.globals.isUserLoggedIn = true;
        this.router.navigate(['/home']);
      }
    });
  }

}
