import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { MapToIterable } from '../pipes/key-value.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserDetails[];
  user: UserDetails;
  key: string;
  value: string;
  editConfigFlag = false;
  mapToIterablePipe: MapToIterable = new MapToIterable();

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.data.forEach( (data: {users: UserDetails[]}) => {
      this.users = data.users;
    });
  }

  createUser() {
    this.userService.createUser();
  }

  getUser() {
    this.userService.getUser()
      .subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
      });
  }

  display() {
    console.log(this.user);
  }

  addDetail() {
    const arr: string[] = [];
    const newUser = this.user;
    this.user = null;
    newUser.details[this.key] = this.value;
    // newUser.details = this.mapToIterablePipe.transform(newUser.details, arr);
    this.user = newUser;
  }

  editDetail(key) {
    this.showEditConfig();
    this.key = key;
    this.value = this.user.details[key];
  }

  clearInputs(): void {
    this.key = this.value = '';
  }

  showEditConfig(): void {
    this.editConfigFlag = true;
  }
  hideEditConfig(): void {
    this.editConfigFlag = false;
  }

}
