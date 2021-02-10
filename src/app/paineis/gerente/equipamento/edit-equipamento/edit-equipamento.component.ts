import { Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { EquipamentoService } from 'src/app/shared/services/equipamento.service';
import { ObterEquipamentoDto } from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
@Component({
    selector: 'ac-edit-equipamento',
    templateUrl: './edit-equipamento.component.html',
    styleUrls: ['./edit-equipamento.component.css']
})
export class EditEquipamentoComponent implements OnInit {

    equipamentoGroup: FormGroup;
    contentModal: ElementRef;
    @Output() EquipamentoTableUpdate: EventEmitter<Pagination<ObterEquipamentoDto>> = new EventEmitter();
    @Input() obterEquipamentoDto: ObterEquipamentoDto;
    @Input() pagination: any;


    statusEquipamento = ["Funcionando", "Quebrado", "Manutenção"];

    constructor
        (
            private modalService: NgbModal,
            private formBuilder: FormBuilder,
            private equimentoService: EquipamentoService,
            private alertService: AlertService
        ) { }

    ngOnInit(): void {
        this.equipamentoGroup = this.formBuilder.group({
            id: [this.obterEquipamentoDto.id],
            nome: [this.obterEquipamentoDto?.nome],
            descricao: [this.obterEquipamentoDto.descricao],
            statusAparelho: [this.obterEquipamentoDto.statusAparelho],
            funcionarioId: [this.obterEquipamentoDto.funcionarioId]
        });
    }

    update() {
        let equipamento = this.equipamentoGroup.getRawValue();

        this.equimentoService
            .put(equipamento)
            .subscribe(() => {
                this.alertService.success("Equipamento atualizado com sucesso !");
                this.equimentoService.get(this.pagination, 1).subscribe(equipamentos => {
                    this.EquipamentoTableUpdate.emit(equipamentos);
                });        

            }, error => {
                if (error != '') {
                    this.alertService.danger(error.error);
                } else {
                    this.alertService.danger("Erro ao atualizar o equipamento")
                }
            });

        setTimeout(() => {
            this.close();
        }, 1700)
    }

    openModal() {
        this.modalService.open(this.contentModal);
    }

    close() {
        setTimeout(() => {
            this.modalService.dismissAll();
        }, 230)
    }

}