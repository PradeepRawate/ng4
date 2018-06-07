import { Component, HostListener } from '@angular/core';
import { Globals } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  profileDropdown = false;

  @HostListener('document:click', ['$event'])
  clear(event) {
    this.profileDropdown = false;
  }

  constructor(private globals: Globals, private router: Router) {
  }

  showDropdown($event: Event) {
    this.profileDropdown = !this.profileDropdown;
    $event.preventDefault();
    $event.stopPropagation();
  }

  logout() {
    this.globals.isUserLoggedIn = false;
    this.router.navigate(['login']);
  }

}
