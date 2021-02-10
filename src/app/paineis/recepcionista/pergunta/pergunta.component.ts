import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { PaginationFilter } from 'src/app/shared/model/Pagination/paginationFilter';
import { DuvidaService } from 'src/app/shared/services/duvida.service';
import { ObterDuvidaDto } from 'src/app/shared/model/duvida/obterDuvidaDto';


@Component({
    selector: 'ac-pergunta',
    templateUrl: './pergunta.component.html',
    styleUrls: ['./pergunta.component.css']
})

export class PerguntaComponent implements OnInit {
    paginationObterDuvidaDto: Pagination<ObterDuvidaDto>;
    duvidas: ObterDuvidaDto[];
    page: number = 1;
    perpage: number = 10;
    campoSearch: boolean = false;
    contentModal: ElementRef;
    perguntaGroup: FormGroup;


    constructor
        (
            private duvidaService: DuvidaService,
            private searchService: SearchService,
            private activatedRoute: ActivatedRoute,
            private modalService: NgbModal,
            private formBuilder: FormBuilder,
            private alertService: AlertService,

    ) { }

    ngOnInit(): void {
        this.paginationObterDuvidaDto = this.activatedRoute.snapshot.data['obterDuvidaDTO']
        this.duvidas = this.paginationObterDuvidaDto.data
        this.perguntaGroup = this.formBuilder.group({
            titulo: ['', Validators.required],
            descricao: ['', Validators.required]
        })

    }

    getDuvida(search: string, page: any = null) {

        let paginationFilter =
        {
            search: search,
            perPage: page != null ? page?.perpage : 10,
            page: page != null ? page?.page : 1
        };
        console.log(paginationFilter)
        if (search != '' || search != null) {
            this.searchService.setLoadingTrue()
            this.duvidaService
                .get(paginationFilter, paginationFilter.page)
                .subscribe(duvidas => {
                    this.paginationObterDuvidaDto = duvidas,
                        this.duvidas = duvidas.data,
                        this.campoSearch = true,
                        setTimeout(() => {
                            this.searchService.setLoadingFalse()
                        }, 250)
                });
        }

    }

    fecharModal() {
        this.modalService.dismissAll();
    }
    abrirModal() {
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    salvarDadosPergunta() {
        if (this.perguntaGroup.valid) {
            let pergunta = this.perguntaGroup.getRawValue();
            this.duvidaService.post(pergunta).subscribe(() => {
                this.alertService.success("Pergunta cadastrada com sucesso!")
                this.perguntaGroup.reset();
                this.duvidaService.get().subscribe(duvidas => {
                    this.duvidas = duvidas.data;
                    this.paginationObterDuvidaDto = duvidas;
                })
                setTimeout(() => {
                    this.modalService.dismissAll()
                }, 3000)

            }, err => {
                this.alertService.danger(err.error)
            })
        } else {
            this.alertService.danger("Preencha todos os campos")
        }

    }

    obterPerguntaEdit(perguntaId: number) {
        let perguntaDto;
        this.duvidas.forEach(pergunta => {
            if (pergunta.id === perguntaId) {
                perguntaDto = pergunta;
            }
        });


        return perguntaDto;

    }

}