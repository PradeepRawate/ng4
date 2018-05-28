import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { Error } from '../models/error.model';

@Component({
    selector: 'app-ms-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit {

    showLoader: boolean;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            console.log('loader status changes to :', val);
            this.showLoader = val;
        });
    }
}
