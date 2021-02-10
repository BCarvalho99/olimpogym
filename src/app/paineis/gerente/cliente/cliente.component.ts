import { Component, ElementRef, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Value } from '../../../shared/model/cliente/obterClienteDto';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import {UserService} from 'src/app/core/user/user.service';
@Component({
    selector: 'ac-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    paginationObterCliente: Pagination<Value>;
    contentModal: ElementRef;
    clienteId: number = 0;
    indexCliente: number = 0;
    obterClientDto: Value;
    excluir: number = 1;
    display: string = '';
    pagination: any;
    constructor
        (
            private activatedRoute: ActivatedRoute,
            private clienteService: ClienteService,
            private searchService: SearchService,
            private modalService: NgbModal,
            private alertService: AlertService,
            private userService: UserService
        ) { }

    ngOnInit(): void {
        this.paginationObterCliente = this.activatedRoute.snapshot.data["obterClienteDto"];
        this.display = this.userService.getNivelUser() == 'Recepcionista' ? 'display' : '';
        console.log(this.userService.getNivelUser())
    }

    getCliente(search: string, page: any = null) {
        this.pagination = {
            search: search, 
            page: page != null ? page.page : 1, 
            perpage: page != null ? page.perpage : 8
        };
        // if(search.length != 0 page != null){
        this.searchService.setLoadingTrue()
        this.clienteService
            .get(search, page)
            .subscribe(clienteTreinos => {
                this.paginationObterCliente = clienteTreinos,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
            });
        //}
    }

    openModal(clienteId: number, excluir: number) {
        this.excluir = excluir;
        this.modalService.open(this.contentModal, { centered: true });
        this.clienteId = clienteId;

        this.paginationObterCliente.data.forEach(cliente => {
            if (cliente.pessoa.id == clienteId) {
                this.obterClientDto = cliente;
            }
        })
    }

    fecharModal() {
        this.modalService.dismissAll();
    }

    detele() {
        this.clienteService
            .delete(this.clienteId)
            .subscribe(() => {
                this.alertService.success("Cliente excluido com sucesso !"),
                    this.paginationObterCliente.data.forEach(cliente => {
                        if (cliente.pessoa.id === this.clienteId) {
                            let index = this.paginationObterCliente.data.indexOf(cliente);
                            this.paginationObterCliente.data.splice(index, 1);
                        }
                    })
                setTimeout(() => {
                    this.modalService.dismissAll();
                }, 3000);

            }, error => {
                this.alertService.danger("Erro ao tentar excluir o cliente")
            });
    }

    obterClienteEdit(clienteId: number){
        let clienteDto;
        this.paginationObterCliente.data.forEach(cliente => {
            if(cliente.pessoa.id === clienteId){
                clienteDto = cliente;
            }
        });
        
        return clienteDto;
    }
}