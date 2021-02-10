import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HideIfloggedDirective } from './hide-if-logged.directive';
@NgModule({
    declarations:[
        HideIfloggedDirective
    ],
    exports:[
        HideIfloggedDirective
    ],
    imports:[CommonModule]
})
export class HideIfloggedModule{}