import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HideIfloggedModule } from '../shared/diretivas/hide-if-logged/hide-if-logged.module';
import { CenterImageModule } from '../shared/diretivas/center-image/center-image.module';
import { RemoveBorderBottomModule } from '../shared/diretivas/remove-border-bottom/remove-border-bottom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MenuModule,
        RouterModule,
        HomeModule,
        HideIfloggedModule,
        CenterImageModule,
        RemoveBorderBottomModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class CoreModule{

}