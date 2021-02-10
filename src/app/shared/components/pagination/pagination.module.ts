import { NgModule } from '@angular/core';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdPaginationBasic } from './pagination-basic';


@NgModule({
    declarations: [
        NgbdPaginationBasic
    ],
    imports:[
        NgbPaginationModule
    ],
    exports:[
        NgbdPaginationBasic
    ]

})
export class PaginationModule{

}