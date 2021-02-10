import {Component, ElementRef, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Pagination} from 'src/app/shared/model/Pagination/pagination';
import {SearchService} from 'src/app/shared/components/search/search.service';
import { PaginationFilter } from 'src/app/shared/model/Pagination/paginationFilter';

import {AtividadeServices} from 'src/app/shared/services/atividade.service';
import {ObterAtividadeDTO} from 'src/app/shared/model/atividade/ObertAtividadeDTO';
import { EquipamentoService } from 'src/app/shared/services/equipamento.service';
import { ObterEquipamentoDto } from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({selector:'ac-atividade', 
templateUrl:'./atividade.component.html', 
styleUrls:['./atividade.component.css']
})


export class AtividadeComponent implements OnInit{
    paginationObterAtividadeDto: Pagination <ObterAtividadeDTO>;
    atividades: ObterAtividadeDTO[];
    page: number = 1;
    perpage: number = 10;
    campoSearch: boolean = false;
    contentModal:ElementRef;
    atividadeGroup: FormGroup;
    equipamentoDto: ObterEquipamentoDto[];
    pagination: any;


    constructor
    (
        private atividadeService: AtividadeServices,
        private searchService: SearchService,
        private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private formBuilder: FormBuilder,
        private equipamentoService: EquipamentoService,
        private userService: UserService,
        private alertService: AlertService
    ){}

    
    ngOnInit(): void {
        this.paginationObterAtividadeDto = this.activatedRoute.snapshot.data['obterAtividadeDTO']
        this.atividades = this.paginationObterAtividadeDto.data
        this.atividadeGroup = this.formBuilder.group({
            nome:['', Validators.required ],
            descricao:['', Validators.required],
            dataInicio:['', Validators.required],
            dataTermino:['', Validators.required],
            aparelhoId:[0],
            funcionarioId:[0]
        })
        this.equipamentoService.get().subscribe(equipamentos => {
            this.equipamentoDto = equipamentos.data
        }) 

        this.pagination = 
        {search:"", 
        perPage:10,
        page: 1
        };
    }

    getAtividade(search: string, page: any = null){

        this.pagination = 
            {search:search, 
            perPage:page != null ?  page?.perpage : 10,
            page:page != null ?  page?.page : 1
            };

        if(search != '' || search != null){
            this.searchService.setLoadingTrue()
            this.atividadeService
                .get(this.pagination, this.pagination.page)
                .subscribe(atividades => {
                    this.paginationObterAtividadeDto = atividades,
                    this.atividades = atividades.data,
                    this.campoSearch = true,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
                });
        }
    }

    fecharModal(){
        this.modalService.dismissAll();
    }
    abrirModal(){
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    salvaDadosAtividade(){
        if(this.atividadeGroup.valid){
            let atividade = this.atividadeGroup.getRawValue();
            this.userService.getUser().subscribe(user => {
                atividade.funcionarioId = user.UsuarioId
            })
            atividade.aparelhoId = atividade.aparelhoId[0];
            this.atividadeService.post(atividade).subscribe(()=>{
                this.alertService.success("Atividade cadastrada com sucesso")
                this.atividadeGroup.reset();
                this.atividadeService.get().subscribe(atividades =>{
                    this.atividades = atividades.data;
                    this.paginationObterAtividadeDto = atividades;
                })
                setTimeout(()=>{
                    this.modalService.dismissAll()
                }, 3000)
            },err=>{
                if(!err.error)
                    this.alertService.danger("Selecione um equipamento")
                else
                    this.alertService.danger(err.error)
            })
        }else{
            this.alertService.danger("Preencha todos os campos");
        }
    }

    obterAtividadeEdit(atividadeId: number){
        let atividadeDto;
        this.atividades.forEach(atividade => {
            if(atividade.id === atividadeId){
                atividadeDto = atividade;
            }
        });
        
        return atividadeDto;
    }

    
}