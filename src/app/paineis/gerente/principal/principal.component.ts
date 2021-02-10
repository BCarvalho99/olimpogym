import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ClienteService } from '../../../shared/services/cliente.service';
import { Value } from '../../../shared/model/cliente/obterClienteDto';
@Component({
    templateUrl:'./principal.component.html',
    styleUrls:["./principal.component.css"]
})
export class PrincipalComponent implements OnInit{
   
    paginationClienteDto: Pagination<Value>;
    clienteAtivos: number = 0;
    clienteInativos: number = 0;
    
    constructor
    (
        private clienteService: ClienteService,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {

        this.paginationClienteDto = this.activatedRoute.snapshot.data["obterClienteDto"];
        
        this.getStatusCliente(this.paginationClienteDto.data)
    }

    getStatusCliente(value: Value[]){
        value.forEach(cliente => {
            if(cliente.ativo){
                this.clienteAtivos++;
            }else{
                this.clienteInativos++;
            }
        })
    }
 }
