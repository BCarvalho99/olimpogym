import { Component, OnInit } from '@angular/core';

import { ObterClienteDto } from '../../../shared/model/cliente/obterClienteDto';
import { ActivatedRoute } from '@angular/router';
import { PlanoService } from 'src/app/shared/services/plano.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AtualizarClienteDto } from '../../../shared/model/cliente/atualizarClienteDto';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { PlanoInformacoesService } from './plano-informacoes.service';

@Component({
    templateUrl: './dados.component.html',
    styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
    btnHabilitar: boolean;
    dadosFormGroup: FormGroup;
    disabled: boolean;
    file: File;
    preview: '';
    obterClienteDto: ObterClienteDto;
    planoNome: string;
    plano = []
    display: string;
    ultimoCampo: string = "";
    borderStatus: string;

    constructor
        (
            private activatedRoute: ActivatedRoute,
            private planoService: PlanoService,
            private formBuilder: FormBuilder,
            private clienteService: ClienteService,
            private alertService: AlertService,
            private planoInformacoesService: PlanoInformacoesService
        ) { }

    handleFile(file: File) {
        this.file = file;

        const reader = new FileReader();

        file.arrayBuffer().then(bytes => console.log(bytes));
        reader.onload = (event: any) => this.preview = event.target.result;

        reader.readAsDataURL(file);
    }

    ngOnInit(): void {
        this.hideBtn();

        this.obterClienteDto = this.activatedRoute.snapshot.data['obterClienteDto'];

        console.log(this.obterClienteDto);

        this.setColorBorder();

        this.getPlano();

        this.valuesForm();
    }

    private getPlano() {
        this.planoService
            .getById(this.obterClienteDto.value.plano.id)
            .subscribe(plano => { 
                this.planoInformacoesService.setValuePlano(plano.value.valor),
                this.plano = plano.value.nome.toUpperCase().split(" ") 
            });
    }

    private valuesForm() {
        this.disabled = true;
        this.dadosFormGroup = this.formBuilder.group({
            nome: [{ value: this.obterClienteDto.value.pessoa.nome, disabled: this.disabled }],
            cpf: [{ value: this.obterClienteDto.value.pessoa.cpf, disabled: this.disabled }],
            email: [{ value: this.obterClienteDto.value.pessoa.email, disabled: this.disabled }],
            telefone: [{ value: this.obterClienteDto.value.telefone, disabled: this.disabled }],
            foto: []
        })
    }

    input = `
    input:not(:placeholder-shown) {
        border-color: yellow;
    }`

    private setColorBorder() {
        if (this.obterClienteDto.value.ativo) {
            this.borderStatus = "border_success"
        } else {
            this.borderStatus = "border_danger"
        }
    }

    update() {
        let dados = this.dadosFormGroup.getRawValue() as AtualizarClienteDto;
        dados.id = this.obterClienteDto.value.pessoa.id;

        console.log(dados.foto);

        this.clienteService.put(dados).subscribe(() => {
            this.dadosFormGroup.disable();
            this.hideBtn();
            this.alertService.success("Dados atualizar com sucesso !");
        }, error => {
            this.alertService.danger(error.message);
        });
    }

    verificarCampo(campo: string) {
        if (this.dadosFormGroup.get(campo).disabled) {
            this.habilitar(campo);
        } else {
            this.desabilitar();
        }
    }

    private habilitar(campo: string) {
        this.dadosFormGroup.get(campo).enable({ onlySelf: true, emitEvent: false });
        this.ultimoCampo = campo;
        this.showBtn();
    }

    private desabilitar() {
        this.ultimoCampo = "";
        this.dadosFormGroup.disable({ onlySelf: true, emitEvent: false });
        this.hideBtn();
    }

    showBtn() {
        this.display = "display-block";
    }

    hideBtn() {
        this.display = "display-none"
    }

}