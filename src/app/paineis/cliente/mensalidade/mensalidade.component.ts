import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanoService } from 'src/app/shared/services/plano.service';
import { PlanoInformacoesService } from '../dados/plano-informacoes.service';

@Component({
    templateUrl: './mensalidade.component.html',
    styleUrls: ['./mensalidade.component.css']
})
export class MensalidadeComponent implements OnInit{

    mensalidadeForm: FormGroup;
    navigation: string;
    template: boolean = true;
    valorPlano: number;
    constructor
    (
        private router: Router,
        private formBuilder: FormBuilder,
        private planoInformacoesService: PlanoInformacoesService
    ){}


    ngOnInit(): void {        
        this.mensalidadeForm = this.formBuilder.group({
            formPagamento :['', Validators.required]
        });

        this.planoInformacoesService
            .getValuePlano()
            .subscribe(plano => {
                console.log(plano)
                this.valorPlano = plano
            })
    }

    checkFormPagamento(){
        let radioButton = this.mensalidadeForm.get('formPagamento').value;
        
        if(radioButton != "boleto")
            this.router.navigateByUrl('painel/cliente/mensalidade/cartao');
        else
            this.router.navigateByUrl('painel/cliente/mensalidade/boleto');
    }
}