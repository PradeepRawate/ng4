import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UtilityService } from '../services/utility.service';
import { Error } from '../models/error.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  showAlert: Error;

  constructor(private utilityService: UtilityService, private router: Router) { }

  ngOnInit() {
    this.utilityService.showAlert.subscribe((value: Error) => {
      console.log('alert :', value);
      this.showAlert = value;
      return value.isError ? this.openPopup(value) : null ;
    });
  }

  openPopup(value: Error) {
    $('#openModalButton').click();
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
