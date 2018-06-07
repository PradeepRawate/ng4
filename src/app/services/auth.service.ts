import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
// import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    isAuthenticated: boolean = false;
    constructor(private http: HttpClient) {}
    // constructor(private http: Http) {}


    login(credentials) {
        // let header = new HttpHeaders();
        let header =  new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
        const creds = 'username=' + credentials.username + '&password=' + credentials.password;
        header = header.append('Access-Control-Allow-Origin', 'http://localhost:4300');
        // const options = new RequestOptions({ headers: header });
        return new Promise((resolve) => {
            this.http.post('http://localhost:8080/oauth/token?grant_type=password&' + creds,
             {}, {headers: header, withCredentials: true}).subscribe((data) => {
                console.log(data);
                if (data) {
                    this.isAuthenticated = true;
                }
                resolve(this.isAuthenticated);
            });
        });
    }
}
