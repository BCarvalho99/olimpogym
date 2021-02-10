import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HorarioService } from './horario.service';
import {ObterAtividadeDTO} from '../../../shared/model/atividade/ObertAtividadeDTO';
import { ActivatedRoute } from '@angular/router';
 
@Component({
    templateUrl: './horario.component.html',
    styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit, OnChanges{
    imagens = ["../../../assets/img/afrodite.jpg","../../../assets/img/deuses_gregos.png", "../../../assets/img/hipercultura-deuses.png"];
    height = 400;
    width = 620;
    indexHorario:number=0;
    obterAtividadeDTO:ObterAtividadeDTO[]; 
    navigation: boolean = false;
    constructor(private horarioService:HorarioService, private activatedRoute: ActivatedRoute){}

    atualizar(event){
        console.log(event);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.indexHorario = this.indexHorario;
       
    }
    ngOnInit(): void {      
        this.obterAtividadeDTO = this.activatedRoute.snapshot.data["obterAtividades"].data;
    }


}
