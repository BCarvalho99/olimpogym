import {Component, Input, OnInit} from "@angular/core";
import {ClienteService} from '../../../shared/services/cliente.service';

@Component({
    templateUrl:'./funcionario.component.html',
    styleUrls:["./funcionario.component.css"

]
}
)
export class FuncionarioComponent implements OnInit{
   
    qtdClientes: number;
  
    
    constructor(private clienteService: ClienteService){

    }
    ngOnInit(): void {
        this.clienteService
        .get()
        .subscribe(clientes => this.qtdClientes = clientes.totalItems)
    }
 }
