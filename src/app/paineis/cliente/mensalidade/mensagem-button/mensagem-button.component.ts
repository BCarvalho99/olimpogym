import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ac-mensagem-button',
    templateUrl: './mensagem-button.component.html',
    styleUrls: ['./mensagem-button.component.css']
})
export class MensagemButtonComponent{
    @Input() textButton: string;

    constructor(private router: Router){}

    voltar(){
        this.router.navigateByUrl("painel/cliente/mensalidade")
    }
}