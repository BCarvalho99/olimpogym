import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisableControlDirective } from './disabled-button.directive';

@NgModule({
    declarations: [DisableControlDirective],
    exports: [DisableControlDirective],
    imports: [CommonModule]
})
export class DisabledButtonModule{}