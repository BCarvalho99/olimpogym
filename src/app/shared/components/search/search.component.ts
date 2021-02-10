import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService } from './search.service';
@Component({
    selector: "ac-search",
    templateUrl: "./search.component.html",
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy{

    debounce: Subject<string> = new Subject<string>();
    @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();

    constructor(public searchService: SearchService){}
    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(500))
            .subscribe(filter => {this.onTyping.emit(filter)});
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

}