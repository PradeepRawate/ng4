import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PopupComponent } from '../popup/popup.component';
import { Error } from '../models/error.model';

@Injectable()
export class UtilityService {

    public showAlert: BehaviorSubject<Error> = new BehaviorSubject<Error>(new Error('', false, '', ''));

    displayAlert(value: any) {
        const error = new Error(value.error.error, true, '', '/home');
        this.showAlert.next(error);
    }


}
