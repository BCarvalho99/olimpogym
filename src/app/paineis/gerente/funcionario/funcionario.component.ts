import {Component, ElementRef, OnInit} from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { FuncionarioService } from '../../../shared/services/funcionario.service';
import { Value } from '../../../shared/model/funcionario/obterFuncionarioDto';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
@Component({
    templateUrl:'./funcionario.component.html',
    styleUrls:["./funcionario.component.css"]
})
export class FuncionarioComponent implements OnInit{
   
    paginationFuncionarioDto: Pagination<Value>;
    contentModal: ElementRef;
    funcionarioNome: string;
    funcionarioId: number;
    pagination: any;
    constructor
    (
        private funcionarioService: FuncionarioService,
        private activatedRoute: ActivatedRoute,
        private searchService: SearchService,
        private modalService: NgbModal,
        private alertService: AlertService
    ){}

    ngOnInit(): void {
        this.paginationFuncionarioDto = this.activatedRoute.snapshot.data['obterFuncionarioDto'];
    }

    deleteFuncionario(){
        this.funcionarioService
            .delete(this.funcionarioId)
            .subscribe(() => {
                    this.alertService.success("Cliente excluido com sucesso !"),
                    this.paginationFuncionarioDto.data.forEach(funcionario => {
                        if (funcionario.id === this.funcionarioId) {
                            let index = this.paginationFuncionarioDto.data.indexOf(funcionario);
                            this.paginationFuncionarioDto.data.splice(index, 1);
                        }
                    })
                setTimeout(() => {
                    this.modalService.dismissAll();
                }, 3000);
            }, error => {
                this.alertService.danger("Erro ao excluir funcionário");
            });
    }

    getFuncionario(search: string, page: any = null){
        this.pagination = {
            search: search, 
            page: page != null ? page.page : 1, 
            perpage: page != null ? page.perpage : 8
        };
        
        let digitou = false;
        // if(search.length != 0 page != null){
            this.searchService.setLoadingTrue()
            this.funcionarioService
                .get(search, page)
                .subscribe(funcionarios => {
                    this.paginationFuncionarioDto = funcionarios,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
                });
            digitou = true;
        //}
    }

    getCargo(nivel: number){
        switch (nivel) {
            case 1:
                return "Serpervisor";
            case 2:
                return "Recepcionista";
            case 3:
                return "Gerente";
            case 4:
                return "Instrutor";
        }
    }

    openModal(funcionarioId: number){
        
        this.funcionarioId = funcionarioId;

        this.paginationFuncionarioDto.data.forEach(funcionario => {
            if(funcionario.id === funcionarioId){
                this.funcionarioNome = funcionario.pessoa.nome;
            }
        });

        this.modalService.open(this.contentModal, { centered: true });
    }

    closeModal(){
        this.modalService.dismissAll();
    }

    obterFuncinarioEdit(funcionarioId: number){
        let funcionarioDto;
        this.paginationFuncionarioDto.data.forEach(funcionario => {
            if(funcionario.id === funcionarioId){
                funcionarioDto = funcionario;
            }
        });

        return funcionarioDto;
    }
 }
