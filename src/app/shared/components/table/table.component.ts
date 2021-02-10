import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '../../model/Pagination/pagination';

@Component({
    selector:'ac-table',
    templateUrl: './table.component.html'
})
export class TableComponent{
    @Output() pagePagination = new EventEmitter<any>();
    @Output() perpage = new EventEmitter<number>();
    @Input() pagination:Pagination<object>;
    @Input() qtdPerPage: number;
    count = 0;
    constructor() {
      this.qtdPerPage = 10;
      this.refreshCountries();      
    }

    refreshCountries(page: number = 1) {
      this.pagePagination.emit({ page: page, perpage: this.qtdPerPage});
      //this.perpage.emit(this.qtdPerPage);
    }
}

