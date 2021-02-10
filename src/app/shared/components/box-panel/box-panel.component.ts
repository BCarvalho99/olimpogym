import { Component, Input, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';

@Component({
    selector: 'ac-box-panel',
    templateUrl: './box-panel.component.html',
    styleUrls: ['./box-panel.component.css']
})
export class BoxPanelComponent{

    @Input()qtdClientes: number;
    @Input()titulo:string;
    

}