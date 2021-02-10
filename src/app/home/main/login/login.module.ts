import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { MainModule } from '../../../home/main/main.module';
import { AlertModule } from '../../../shared/components/alert/alert.module';
import { ValidatorMessageModule } from '../../../shared/validator-message/validator-message.module';
@NgModule({
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        MainModule,
        ReactiveFormsModule,
        AlertModule,
        ValidatorMessageModule    
    ]
})
export class LoginModule{
}