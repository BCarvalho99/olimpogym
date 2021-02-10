import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../../../shared/components/alert/alert.service';
import { Value } from '../../../../shared/model/funcionario/obterFuncionarioDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { UserService } from 'src/app/core/user/user.service';
@Component({
    selector: 'ac-edit-funcionario',
    templateUrl: './edit-funcionario.component.html',
    styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

    contentModal: ElementRef;
    funcionarioGroup: FormGroup;
    @Input() obterFuncionarioDto: Value;
    @Output() updateTableFuncionario: EventEmitter<Pagination<Value>> = new EventEmitter();
    @Input() pagination: any;
    nivelName: string;
    nivelFuncionarios = ["Supervisor", "Recepcionista", "Gerente", "Instrutor"];
    constructor
        (
            private modalService: NgbModal,
            private formBuilder: FormBuilder,
            private funcionarioService: FuncionarioService,
            private alertService: AlertService,
            private userService: UserService
        ) { }

    ngOnInit(): void {
        this.funcionarioGroup = this.formBuilder.group({
            id: [this.obterFuncionarioDto.id],
            nome: [this.obterFuncionarioDto.pessoa.nome],
            nivel: [this.obterFuncionarioDto.pessoa.nivel],
            cpf: [this.obterFuncionarioDto.pessoa.cpf],
            email: [this.obterFuncionarioDto.pessoa.email]
        });

        this.getNível();
    }

    update() {
        let funcionario = this.funcionarioGroup.getRawValue();
        
        funcionario.pessoaId = this.obterFuncionarioDto.pessoa.id;

        console.log(funcionario);
        
        this.funcionarioService
            .put(funcionario)
            .subscribe(() => {
                this.alertService.success("Funcionário atualizado com sucesso !");
                this.funcionarioService
                    .get('', this.pagination)
                    .subscribe(funcionarios => {
                        this.updateTableFuncionario.emit(funcionarios);
                    });
            }, error => {
                if (error?.error != '') {
                    this.alertService.danger(error.error);
                } else {
                    this.alertService.danger("Error ao atualizar o funcionário");
                }
            })

        setTimeout(() => {
            this.close();
        }, 1700)

    }

    openModal() {
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    close() {
        setTimeout(() => {
            this.modalService.dismissAll();
        }, 230);
    }

    private getNível() {
        switch (this.obterFuncionarioDto.pessoa.nivel) {
            case 1:
                this.nivelName = "Serpervisor";
                break;
            case 2:
                this.nivelName = "Recepcionista";
                break;
            case 3:
                this.nivelName = "Gerente";
                break;
            case 4:
                this.nivelName = "Instrutor";
                break;
        }
    }

}