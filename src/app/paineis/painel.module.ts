import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PainelComponent } from '../paineis/painel.component';
import { PainelRoutingModule } from './painel.routing.module';

@NgModule({
    declarations:[
        PainelComponent,
    ],
    exports:[
        PainelComponent
    ],
    imports:[
        CommonModule,
        PainelRoutingModule,
        RouterModule
    ]
})
export class PainelModule{}