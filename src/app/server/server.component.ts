import { Component, OnInit } from '@angular/core';

@Component({
    selector : '.app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    empId: number = 515548;
    empName: string = 'Pradeep Rawate';
    btnVisibility: boolean;
    status: string = 'Offline';
    signalFromChild = false;
    myObject: Object = {
        empId: this.empId,
        empName: this.empName,
        status: this.status
    }

    ngOnInit() {
        this.getEmployeeId();
        setTimeout(() => {
            this.btnVisibility = true;
        }, 2000);
    }

    getEmployeeId() {
        return this.empId;
    }

    getEmployeeName() {
        return this.empName;
    }

    onClick() {
        this.signalFromChild = false;
        if (this.status === 'Offline') {
            this.status = 'Online';
        } else {
            this.status = 'Offline'; 
            this.myObject = {
                empId: this.empId,
                empName: this.empName,
                status: this.status
            };
        }
    }

    getColor() {
        return this.status === 'Online' ? 'lightgreen' : 'rgba(255, 0, 0, 0.41)';
    }

    getSignal($event) {
        this.signalFromChild = true;
        this.status = $event === 'Out' ? 'Offline' : 'Online';
    }
}
