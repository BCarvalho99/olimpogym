import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ObterDuvidaDto } from 'src/app/shared/model/duvida/obterDuvidaDto';
import { Pagination } from '../../../../shared/model/Pagination/pagination';
import { DuvidaService } from 'src/app/shared/services/duvida.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ac-perguntas',
    templateUrl: './pergunta.component.html',
    styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit{

    textos = new Array<string>();
    loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
    titulos = new Array<string>();

    @Input() obterDuvida: Pagination<ObterDuvidaDto>;

    constructor
    (
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.textos.push(this.loremIpsum, this.loremIpsum, this.loremIpsum, this.loremIpsum);
        this.titulos.push("COMO FAÇO PARA TREINAR ?", "EU QUERO TREINAR ?", "COMO FAÇO PARA TREINAR ?", "COMO FAÇO PARA TREINAR ?");
            
        this.obterDuvida = this.activatedRoute.snapshot.data['obterDuvidas'];

        console.log(this.obterDuvida)
    }
}