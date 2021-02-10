import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarrosselComponent } from './carrossel.component';

@NgModule({
    declarations: [
        CarrosselComponent
    ],
    exports:[
        CarrosselComponent
    ],
    imports:[
        CommonModule,
        NgbModule,
        NgbPaginationModule, 
        NgbAlertModule   
    ]
})
export class CarrosselModule{

}