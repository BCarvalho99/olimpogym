import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveBorderBottomDirective } from './remove-border-bottom.directive';
@NgModule({
    declarations:[
        RemoveBorderBottomDirective
    ],
    exports:[
        RemoveBorderBottomDirective
    ],
    imports:[CommonModule]
})
export class RemoveBorderBottomModule{}