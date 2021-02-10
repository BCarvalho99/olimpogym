import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCollapseBasic } from './collapse-basic';

@NgModule({
  imports: [ CommonModule, NgbModule],
  declarations: [NgbdCollapseBasic],
  exports: [NgbdCollapseBasic],
  bootstrap: [NgbdCollapseBasic]
})
export class NgbdCollapseBasicModule {}
