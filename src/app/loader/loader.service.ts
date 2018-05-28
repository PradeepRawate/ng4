import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Error } from '../models/error.model';

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    display(value: boolean) {
        this.status.next(value);
    }
}
