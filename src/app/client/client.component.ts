import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientService } from './client.service';
import { IData } from './clientData';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() childMessage: Object;
  @Output() signal = new EventEmitter<string>();

  message: string = 'Out';
  data: IData[];

  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this._clientService.getdata()
    .subscribe(
      data => this.data = data,
      error => console.log(error)
    );
  }

  sendSignal() {
    this.message = this.message === 'Out' ? 'Not-Out' : 'Out';
    this.signal.emit(this.message);
  }

}
