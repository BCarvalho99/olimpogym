import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../../../shared/components/alert/alert.service';
import {AtividadeServices} from '../../../../shared/services/atividade.service'
import { ObterAtividadeDTO } from '../../../../shared/model/atividade/ObertAtividadeDTO';
import { ObterEquipamentoDto } from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { timeout } from 'rxjs/operators';

@Component({
    selector:'ac-edit-atividade',
    templateUrl: './edit-atividade.component.html',
    styleUrls: ['./edit-atividade.component.css']
})
export class EditAtividadeComponent implements OnInit{
    contentModal: ElementRef;
    atividadeGroup: FormGroup;
    @Input() obterAtividadeDto: ObterAtividadeDTO;
    @Output() updateTableAtividade: EventEmitter<Pagination<ObterAtividadeDTO>> = new EventEmitter();
    @Input() obterEquipamentosDto: ObterEquipamentoDto[];
    @Input() pagination;
    constructor(
        private modalService: NgbModal,
        private formBuilder: FormBuilder,
        private atividadeService: AtividadeServices,
        private alertService: AlertService
    )
    {}

    ngOnInit(): void {
        setTimeout(() => {
            this.obterAtividadeDto
        }, 1000);
        
        this.atividadeGroup = this.formBuilder.group({
            id: [this.obterAtividadeDto.id],
            nome: [this.obterAtividadeDto.nome],
            descricao:[this.obterAtividadeDto.descricao],
            dataInicio:[this.obterAtividadeDto.dataInicio],
            dataTermino:[this.obterAtividadeDto.dataTermino],
            aparelhoId:[this.obterAtividadeDto.aparelhoId],
            funcionarioId:[this.obterAtividadeDto.funcionarioId]            
        })
    }         

    close(){
        this.modalService.dismissAll();
    }

    openModal(){
        this.modalService.open(this.contentModal, {size: 'lg'});
    }
    
    update(){
        let atividade = this.atividadeGroup.getRawValue();
        atividade.aparelhoId = atividade.aparelhoId[0];
        this.atividadeService
            .put(atividade)
            .subscribe(() => {
                this.alertService.success("Atividade atualizada com sucesso!");
                this.atividadeService
                    .get()
                    .subscribe(atividades => {
                        this.updateTableAtividade.emit(atividades);
                        this.close();
                    })
                    
                    
            }
            ,error =>{
                this.alertService.danger(error.error);
            })
    }

}