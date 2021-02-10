import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ObterPlanoDto } from 'src/app/shared/model/plano/ObterPlanoDto';
import { ClienteService } from 'src/app/shared/services/cliente.service';

import { PlanoService } from 'src/app/shared/services/plano.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
@Component({
    selector: 'ac-add-cliente',
    templateUrl: 'add-cliente.component.html',
    styleUrls: ['add-cliente.component.css']
})
export class AddClienteComponent implements OnInit{
    
    contentModal: ElementRef;
    obterPlanoDto: ObterPlanoDto[];
    clienteFormGroup: FormGroup;
    constructor
    (
        private modalService: NgbModal,
        private planoService: PlanoService,
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private usuarioService: UsuarioService,
        private alertService: AlertService
    ){}

    ngOnInit(): void {  
        this.planoService
            .get()
            .subscribe(planos => {
                this.obterPlanoDto = planos.data
            });
        
        this.clienteFormGroup = this.formBuilder.group({
            Nome: ['', Validators.required],
            Email: ['', [Validators.required]],
            Cpf: ['', Validators.required],
            Telefone: ['', Validators.required],
            PlanoId: [0, Validators.required],
            senha:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
            confirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
        });
    }

    close(){
        this.modalService.dismissAll();
    }

    openModal(){
        this.modalService.open(this.contentModal, { size: 'lg' });
    }

    post(){
        if(this.clienteFormGroup.valid && !this.clienteFormGroup.pending){
            let dadosForm = this.clienteFormGroup.getRawValue();

            if(dadosForm.senha == dadosForm.confirmarSenha){
                this.clienteService
                    .post(dadosForm)
                    .subscribe(resp => {
                            this.usuarioService.post(dadosForm).subscribe(() => {
                                this.alertService.success("Cliente registrado com sucesso !");
                                setTimeout(() => { 
                                    this.clienteFormGroup.reset();
                                } , 1000);
                            });
                        },
                        error => {
                            this.alertService.danger(error.error);
                    });
            }
        }
    }
}
