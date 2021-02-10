import {Component, Input, OnInit} from "@angular/core";
import {ClienteService} from '../../../shared/services/cliente.service';

@Component({
    templateUrl:'./principal.component.html',
    styleUrls:["./principal.component.css"

]
}
)
export class PrincipalComponent implements OnInit{
   
    qtdClientes: number;
  
    
    constructor(private clienteService: ClienteService){

    }
    ngOnInit(): void {
        this.clienteService
        .get()
        .subscribe(clientes => this.qtdClientes = clientes.totalItems)
    }
 }
