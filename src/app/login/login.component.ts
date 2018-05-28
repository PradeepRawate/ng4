import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private globals: Globals) { }

  ngOnInit() {
  }

  login() {
    this.globals.isUserLoggedIn = true;
    this.router.navigate(['/home']);
  }

}
