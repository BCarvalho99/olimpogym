import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
    declarations: [TableComponent],
    exports: [TableComponent],
    imports: [CommonModule, NgbModule, FormsModule, PaginationModule],
    bootstrap: [TableComponent]
})
export class TableModule{}