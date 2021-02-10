import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { CarrosselModule } from '../home/main/carrossel/carrossel.module';
import { LoginModule } from '../home/main/login/login.module';
import { MainModule } from './main/main.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports:[
        HomeComponent,
        CarrosselModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        LoginModule,
        MainModule,
        SpinnerModule
    ]
})
export class HomeModule{}