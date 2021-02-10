import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '../shared/services/loading/loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loadService: LoaderService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadService.show();

        return next.handle(req).pipe(finalize(() => this.loadService.hide()));
    }

}