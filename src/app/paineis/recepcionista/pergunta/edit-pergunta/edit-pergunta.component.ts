import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { AlertService } from '../../../../shared/components/alert/alert.service';
import {ObterDuvidaDto} from '../../../../shared/model/duvida/obterDuvidaDto';
import {DuvidaService} from '../../../../shared/services/duvida.service';

@Component({
    selector:'ac-edit-pergunta',
    templateUrl: './edit-pergunta.component.html',
    styleUrls:['./edit-pergunta.component.css']
})
export class EditPerguntaComponent implements OnInit{

    contentModal:ElementRef;
    perguntaGroup: FormGroup;
    @Input() obterPerguntaDto: ObterDuvidaDto;
    @Output() updateTablePergunta: EventEmitter<Pagination<ObterDuvidaDto>> = new EventEmitter();
    @Input() pagination;
    constructor(
        private modalService: NgbModal,
        private FormBuilder: FormBuilder,
        private perguntaService: DuvidaService,
        private alertService: AlertService
    )
    {}

    ngOnInit(): void {
        setTimeout(()=> {
            this.obterPerguntaDto
        }, 1000);

        this.perguntaGroup = this.FormBuilder.group({
            id:[this.obterPerguntaDto.id],
            descricao: [this.obterPerguntaDto.descricao],
            titulo: [this.obterPerguntaDto.titulo]    
        })
    }

    close(){
        this.modalService.dismissAll();
    }

    openModal(){
        this.modalService.open(this.contentModal, {size: 'lg'});
    }

    update(){
        let pergunta = this.perguntaGroup.getRawValue();
        this.perguntaService
            .put(pergunta)
            .subscribe(()=>{
                this.alertService.success("Pergunta atualizada com sucesso!")
                this.perguntaService
                    .get()
                    .subscribe(perguntas => {
                        this.updateTablePergunta.emit(perguntas);
                        this.close();
                    })
            }
            ,error => {
                this.alertService.danger(error.error);
            })
    }            
}