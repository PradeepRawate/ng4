import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { UserDetails } from './user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class UserResolveService implements Resolve<UserDetails> {
    constructor(private service: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getUsers().map((res: Response) => res);
    }
}
