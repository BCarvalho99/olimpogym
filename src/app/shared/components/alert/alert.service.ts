import { Injectable } from '@angular/core';
import { Subject , Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

import { Alert, AlertType } from './alert';

@Injectable({providedIn: 'root'})
export class AlertService{
    
    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChance = false;

    constructor(router: Router){

        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterRouteChance){
                    this.keepAfterRouteChance = false;
                }else{
                    this.clear();
                }
            }
        });
    }

    clear(){
        this.alertSubject.next(null);
    }

    private alert(alertType: AlertType, message: string, keepAfterRouteChance: boolean){
        this.keepAfterRouteChance = keepAfterRouteChance;

        this.alertSubject.next(new Alert(alertType, message));
    }

    success(message: string, keepAfterRouteChance: boolean = false){
        this.alert(AlertType.Success, message, keepAfterRouteChance);
    }

    warning(message: string, keepAfterRouteChance: boolean = false){
        this.alert(AlertType.Warning, message, keepAfterRouteChance);
    }
    
    danger(message: string, keepAfterRouteChance: boolean = false){
        this.alert(AlertType.Danger, message, keepAfterRouteChance);
    }

    info(message: string, keepAfterRouteChance: boolean = false){
        this.alert(AlertType.Info, message, keepAfterRouteChance);
    }

    getAlert() : Observable<Alert>{
        return this.alertSubject.asObservable();
    }
}