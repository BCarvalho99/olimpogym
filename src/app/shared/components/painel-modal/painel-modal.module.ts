import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { PainelModalComponent } from './painel-modal.component';
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [PainelModalComponent],
  exports: [PainelModalComponent],
  bootstrap: []
})
export class PainelModalModule {}