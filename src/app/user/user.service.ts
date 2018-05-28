import { Http , Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from './user.model';

@Injectable()
export class UserService {
    user: UserDetails;
    constructor(private _http: HttpClient) {}

    getUsers() {
        return this._http.get('https://my-json-server.typicode.com/PradeepRawate/demo/data').map((res: Response) => res);
        // return this._http.get('http://localhost:8080/api/users').map((res: Response) => res);
    }

    createUser() {
        return this._http.put('http://localhost:8080/api/userD', this.getDummyUser())
        .do((res) => console.log(res))
        .finally(() => console.log('finally'))
        .subscribe(res => console.log('PUT call....'));
    }

    getUser() {
        return this._http.get('http://localhost:8080/api/userD/1')
        .map((res: any) => res)
        .do((res) => {
            this.user = res;
            console.log('UserDetails as response', this.user);
                     })
        .finally(() => console.log('finally'));
    }

    getDummyUser() {
        const user = new UserDetails();
        user.id = '1';
        user.details['cell'] = '8087810808';
        user.details['city']  = 'Pune';
        return user;
    }
}
