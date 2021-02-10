import { NgModule } from '@angular/core';
import { ScrollComponent } from './scroll.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
    declarations: [
        ScrollComponent
    ],
    exports: [
        ScrollComponent
    ],
    imports:[
        PerfectScrollbarModule
    ],
    providers:[
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }   
    ]
})
export class ScrollModule{}