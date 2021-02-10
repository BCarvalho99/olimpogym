import { InfoMainComponent } from './main_info/infomain.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbdModalConfigModule } from '../../shared/components/modal/modal-config.module';
import { RegisterComponent } from './register/register.component';
import { ValidatorMessageModule } from '../../shared/validator-message/validator-message.module';
import { PlanoComponent } from './planos/plano.component';
import { DuvidaModule } from './duvidas/duvida.module';
import { HorarioComponent } from './horarios/horario.component';
import { CarrosselModule } from './carrossel/carrossel.module';
import { MainComponent } from './main.component';
import { CardComponent } from './planos/card/card.component';
import {NgbdCollapseBasicModule} from '../../shared/components/collapse/collapse-basic.module';
import { AlertModule } from '../../shared/components/alert/alert.module';
import { InfoModComponent } from './main_info/infomod.component';
const maskConfig: Partial<IConfig> = {
    validation: false
};

@NgModule({
    declarations: [
        RegisterComponent,
        PlanoComponent,
        HorarioComponent,
        MainComponent,
        CardComponent,
        InfoMainComponent,
        InfoModComponent
    ],
    exports:[
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(maskConfig),
        ValidatorMessageModule,
        DuvidaModule,
        CarrosselModule,
        NgbdCollapseBasicModule,
        AlertModule,
        NgbdModalConfigModule
    ]
})
export class MainModule{}
