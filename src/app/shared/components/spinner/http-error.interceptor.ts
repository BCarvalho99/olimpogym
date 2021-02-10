import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from "rxjs";
import { SpinnerService } from "./spinner.service";
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

    constructor(private spinnerService: SpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.spinnerService.requestStarted();
        return this.handler(next, req);
    }

    handler(next, request){
        return next.handle(request)
            .pipe(
                tap(
                    (event) => {
                        if(event instanceof HttpResponse){
                            this.spinnerService.requestEnded();
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.spinnerService.resetSpinner();
                        throw error;
                    }
                )
            )
    }
}