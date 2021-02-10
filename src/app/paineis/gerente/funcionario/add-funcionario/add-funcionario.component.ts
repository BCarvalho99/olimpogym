import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
    selector: 'ac-add-funcionario',
    templateUrl: './add-funcionario.component.html',
    styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {
    funcionarioGroup: FormGroup
    contentModal: ElementRef;

    constructor
        (
            private formBuilder: FormBuilder,
            private modalService: NgbModal,
            private funcionarioService: FuncionarioService,
            private usuarioService: UsuarioService,
            private alertService: AlertService
        ) { }

    ngOnInit(): void {
        this.funcionarioGroup = this.formBuilder.group({
            nome: ['', Validators.required],
            nivel: [1, Validators.required],
            cpf: ['', Validators.required],
            email: ['', Validators.required],
            senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
            confirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
        })
    }

    openModal() {
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    post() {
        if (this.funcionarioGroup.valid && !this.funcionarioGroup.pending) {
            let funcionario = this.funcionarioGroup.getRawValue();

            if (funcionario.senha === funcionario.confirmarSenha) {
                this.funcionarioService
                    .post(funcionario)
                    .subscribe(resp => {
                        console.log(resp);
                        this.usuarioService
                            .post({pessoaId: resp.id.value.value, senha: funcionario.senha})
                            .subscribe(() => {
                                this.alertService.success("Funcionário registrado com sucesso !");
                                this.funcionarioGroup.reset();
                            })
                    }, error => {
                        this.alertService.danger(error.error);
                    })

            }
        }
    }

    close() {
        this.modalService.dismissAll();
    }
}