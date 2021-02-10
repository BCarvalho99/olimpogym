import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';

@NgModule({
    declarations: [
        TemplateComponent
    ],
    exports: [
        TemplateComponent
    ]
})
export class TemplateModule{
}