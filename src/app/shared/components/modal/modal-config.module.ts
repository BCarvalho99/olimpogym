import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { NgbdModalOptions } from './modal-config';
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NgbdModalOptions],
  exports: [NgbdModalOptions],
  bootstrap: [NgbdModalOptions]
})
export class NgbdModalConfigModule {}