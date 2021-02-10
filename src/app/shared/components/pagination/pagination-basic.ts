import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Pagination } from '../../../shared/model/Pagination/pagination';
import { ObterDuvidaDto } from '../../../shared/model/duvida/obterDuvidaDto';
@Component({
  selector: 'ngbd-pagination-basic',
  templateUrl: './pagination-basic.html'
})
export class NgbdPaginationBasic implements OnChanges{
  
  @Input() obter: Pagination<object>;
  
  @Output() pageOutPut = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.obter){
      this.obter = this.obter;
    }
  }

  getPage(event){
    this.pageOutPut.emit(event);
  }
}