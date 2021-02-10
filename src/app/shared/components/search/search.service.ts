import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchService{
    loading$ = new BehaviorSubject<boolean>(false);

    setLoadingTrue(){
        this.loading$.next(true);
    }

    setLoadingFalse(){
        this.loading$.next(false);
    }
}