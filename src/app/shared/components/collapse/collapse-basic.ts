import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngbd-collapse-basic',
  templateUrl: './collapse-basic.html',
  styleUrls: [ './collapse-basic.css']
})
export class NgbdCollapseBasic {
  public isCollapsed = true;
  @Input() textoPlano = 'sgfdgdgfdgfddsafg';
  @Input() valorPlano:number;
}
