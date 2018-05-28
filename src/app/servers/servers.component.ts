import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  parentMessage = 'Pradeep';

  configPair: any = {};
  configurations = new Map<string, string>();
  keyValues = [[]];
  key: string;
  value: string;
  constructor() {
  }

  ngOnInit() {
    this.configurations.set('name', 'Pradeep');
    this.configurations.set('id', '515548');
  }

  addConfiguration() {
    if (this.configurations.has(this.key)) {
      alert('Already exists !!!');
    }
    this.configurations = this.configurations.set(this.key, this.value);
    this.key = this.value = '';
  }

  removeConfiguration(key) {
    this.configurations.delete(key);
    // this.keyValues.splice(index, 1);
  }

  editConfiguration(key) {
    this.key = key;
    this.value = this.configurations.get(key);
    // this.keyValues.splice(index, 1);
  }

  display() {
    this.configurations.forEach((value: any, key: any) => {
      console.log('key', key + 'value', value);
    });
  }

  getConfigurations(map) {
    return this.keyValues;
  }


}
