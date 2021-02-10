import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableButton} from './table.directive';
@NgModule({
    declarations:[
        TableButton
    ],
    exports:[
        TableButton
    ],
    imports:[CommonModule]
})
export class TableButtonModule{}