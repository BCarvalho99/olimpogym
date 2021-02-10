import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PainelModule } from '../painel.module';

import { SideBarComponent } from './sidebar.component'
@NgModule({
    declarations: [
        SideBarComponent
    ],
    exports:[
        SideBarComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        PainelModule
    ]
})
export class SideBarModule{

}