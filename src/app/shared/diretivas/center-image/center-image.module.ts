import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterImageDirective } from './center-image.directive';
@NgModule({
    declarations:[
        CenterImageDirective
    ],
    exports:[
        CenterImageDirective
    ],
    imports:[CommonModule]
})
export class CenterImageModule{}