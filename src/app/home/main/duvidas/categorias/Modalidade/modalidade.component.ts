import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ac-modalidade',
    templateUrl: './modalidade.component.html',
    styleUrls: ['./modalidade.component.css']
})
export class ModalidadeComponent implements OnInit{
    @Input() categoria: string = '';

    modalidades = new Array<string>();
    
    ngOnInit(): void {
        this.modalidades.push("EQUIPAMENTOS", "MUSCULAÇÃO", "INSTRUTORES", "HORÁRIO");

    }
}