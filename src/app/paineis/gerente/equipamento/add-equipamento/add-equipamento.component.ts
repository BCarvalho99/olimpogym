import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ObterEquipamentoDto } from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { EquipamentoService } from '../../../../shared/services/equipamento.service';

@Component({
    selector: 'ac-add-equipamento',
    templateUrl: './add-equipamento.component.html',
    styleUrls: ['./add-equipamento.component.css']
})
export class AddEquipamentoComponent implements OnInit{
    equipamentoGroup: FormGroup;
    contentModal: ElementRef;

    constructor
    (
        private modalService: NgbModal,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private equipamentoService: EquipamentoService,
        private alertService: AlertService
    ){}

    ngOnInit(): void {
        this.equipamentoGroup = this.formBuilder.group({
            descricao: ['', Validators.required],
            nome: ['', Validators.required],
            funcionarioId:[0]
        });
    }

    post(){
        let funcionario = this.equipamentoGroup.getRawValue();

        this.userService.getUser().subscribe(user => {
            funcionario.funcionarioId = user.UsuarioId
        });

        this.equipamentoService
            .post(funcionario)
            .subscribe(() => {
                this.alertService.success("Equipamento registrado com sucesso !");
                this.equipamentoGroup.reset();
            }, error => {
                this.alertService.danger(error.error);
            });
    }

    openModal(){
        this.modalService.open(this.contentModal);
    }

    close(){
        this.modalService.dismissAll();
    }

}