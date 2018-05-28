import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { LoaderService } from '../loader/loader.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { UtilityService } from './utility.service';
import { Error } from '../models/error.model';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private loaderService: LoaderService, private utilityService: UtilityService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req)
            .catch((error: HttpErrorResponse) => {
                return Observable.throw(this.handleError(error));
              })
            .finally(() => {
                this.hideLoader();
            });
    }

    public handleError(error: HttpErrorResponse): any {
        console.log('error ', error);
        this.utilityService.displayAlert(error);
        return error;
    }

    private showLoader(): void {
        this.loaderService.display(true);
    }

    private showAlert(error: any) {
    }

    private hideLoader(): void {
        this.loaderService.display(false);
    }

}
