import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IData } from './clientData';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ClientService {

    constructor(private _http: Http) {

    }

    getdata(): Observable<IData[]> {
        return this._http.get('assets/data.json')
        .map((response: Response) => <IData[]> response.json())
        .do(data => console.log(data));
    }
}
