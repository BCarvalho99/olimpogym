import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Value } from '../../../../shared/model/cliente/obterClienteDto';

@Component({
    selector: 'ac-edit-cliente',
    templateUrl: './edit-cliente.component.html',
    styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
    contentModal: ElementRef;
    clienteGroup: FormGroup;
    @Input() obterClientDto: Value;
    @Output() updateTableCliente: EventEmitter<Pagination<Value>> = new EventEmitter();
    @Input() pagination;
    constructor
        (
            private modalService: NgbModal,
            private formBuilder: FormBuilder,
            private clienteService: ClienteService,
            private alertService: AlertService
        ) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.obterClientDto
        }, 1000);


        this.clienteGroup = this.formBuilder.group({
            id: [this.obterClientDto.id],
            nome: [this.obterClientDto.pessoa.nome],
            email: [this.obterClientDto.pessoa.email],
            telefone: [this.obterClientDto.telefone],
            cpf: [this.obterClientDto.pessoa.cpf]
        })
    }

    close() {
        setTimeout(() => {
            this.modalService.dismissAll();
        }, 230)
    }

    openModal() {
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    update() {
        let cliente = this.clienteGroup.getRawValue();
        cliente.pessoaId = this.obterClientDto.pessoa.id;
        this.clienteService
            .put(cliente)
            .subscribe(() => {
                this.alertService.success("Cliente atualizado com sucesso !");
                this.clienteService
                    .get('', this.pagination)
                    .subscribe(clientes => {
                        this.updateTableCliente.emit(clientes);
                    })
            }, error => {
                this.alertService.danger(error.error);
            });

        setTimeout(() => {
            this.close();
        }, 1700)
    }
}