import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from '../../../shared/services/cliente.service';
import { ObterPlanoDto } from 'src/app/shared/model/plano/ObterPlanoDto';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { AlertService } from '../../../shared/components/alert/alert.service';
@Component({
    selector: 'ac-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

    registerGroup: FormGroup;
    obterPlanosDtos: ObterPlanoDto[];

    constructor
    (
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private usuarioService: UsuarioService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.registerGroup = this.formBuilder.group({
            Nome: ['', Validators.required],
            Email: ['', [Validators.required]],
            Cpf: ['', Validators.required],
            Telefone: ['', Validators.required],
            PlanoId: [null, Validators.required],
            senha:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
            confirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
        });

        this.obterPlanosDtos = this.activatedRoute.snapshot.data['ObterPlanoDto'].data;
    }

    post(){
        if(this.registerGroup.valid && !this.registerGroup.pending){
            let dadosForm = this.registerGroup.getRawValue();

            if(dadosForm.senha == dadosForm.confirmarSenha){
                this.clienteService
                    .post(dadosForm)
                    .subscribe(resp => {
                            console.log();
                            this.usuarioService.post({pessoaId: resp.id.value, senha: dadosForm.senha } ).subscribe(() => {
                                this.alertService.success("Cliente registrado com sucesso !");
                                setTimeout(() => { 
                                    this.router.navigate(['login']), 
                                    this.registerGroup.reset();
                                } , 1000);
                            }, () => {
                                console.log("Erro ao tentar cadastrar o login.")
                            });
                        },
                        error => {
                            this.alertService.danger(error.error);
                    });
            }
        }
    }
}
