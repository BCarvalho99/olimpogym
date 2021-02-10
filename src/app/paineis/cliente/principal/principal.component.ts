import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';
import { ObterAtividadeDTO } from 'src/app/shared/model/atividade/ObertAtividadeDTO';
import { ObterAulaDto } from 'src/app/shared/model/aula/obterAulaDto';
import { AulaService } from '../../../shared/services/aula.service';
import { ObterFuncionarioDto } from '../../../shared/model/funcionario/obterFuncionarioDto';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
@Component({
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
    titulo = "SEJA BEM-VINDO"
    userName: string;
    obterAtividadeDto: ObterAtividadeDTO[];
    //Modal;
    modalTitle = "Aulas em andamento no momento";
    modalBody = "Natação livre <br> Com o professor, César Pavielo";
    textButton = "VISUALIZAR AULAS EM ANDAMENTO";
    buttonModal = "FECHAR";
    classBtnPrincipal = 'btn-aulasandamento pb-2 pt-2 pl-4 pr-4';

    paginationAulaDto: Pagination<ObterAulaDto>;
    obterAulaDto: ObterAulaDto[];
    obterFuncionarioDto: ObterFuncionarioDto[];

    constructor
    (
        private userService: UserService,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => this.userName = user.UserName.toUpperCase());

        this.paginationAulaDto = this.activatedRoute.snapshot.data["obterAulaDto"]
        
        this.obterAulaDto = this.paginationAulaDto.data
    }
}