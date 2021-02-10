import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ObterClienteDto, Value } from 'src/app/shared/model/cliente/obterClienteDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';

@Component({
    templateUrl:'./principal.component.html',
    styleUrls:["./principal.component.css"

]
}
)
export class PrincipalComponent implements OnInit{
   
    qtdClientesAtivos: number = 0;
    qtdClientesInativos:number = 0;
    paginationClienteDTO: Pagination<Value>;
  
    
    constructor(private activated: ActivatedRoute){

    }
    ngOnInit(): void {
        this.paginationClienteDTO = this.activated.snapshot.data["obterClienteDTO"];
        console.log(this.paginationClienteDTO.data)
        this.verificarStatusCliente(this.paginationClienteDTO.data);
    }

    verificarStatusCliente(clientes: Value[]){
        clientes.forEach(cliente => {
           if(cliente.ativo)this.qtdClientesAtivos++;
            else this.qtdClientesInativos++;    
        });
    } 
}
