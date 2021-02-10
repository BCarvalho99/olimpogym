import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SpinnerComponent],
    exports: [SpinnerComponent],
    imports: [CommonModule]
})
export class SpinnerModule{}