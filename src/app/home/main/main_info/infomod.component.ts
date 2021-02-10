import {
  Component, Input, OnInit } from '@angular/core';
import { ObterAulaDto } from 'src/app/shared/model/aula/obterAulaDto';
import { AulaService } from 'src/app/shared/services/aula.service';
@Component({
  selector: 'ac-infomod',
  templateUrl: './infomod.component.html',
  styleUrls:[
    './infomod.component.css'
  ]
})

export class InfoModComponent implements OnInit{
  obterAulaDto:ObterAulaDto[];
  index:number = 0;

  constructor(private aulaService:AulaService){}

  ngOnInit(): void {
    this.aulaService.get().subscribe(aulas => {
      this.obterAulaDto = aulas.data
    })
  }

  getAula(){

    if (this.index == this.obterAulaDto.length -1){
      this.index = -1;
    }
    this.index++;


  }

  mod_img = ["../../../../assets/img/latrel.jpg",
"../../../../../assets/img/milos.jpg",
"../../../../../assets/img/egypt_dance.jpg",
"../../../../../assets/img/mei.jpg",
"../../../../../assets/img/dance.jpg",
"../../../../../assets/img/lucha.jpg",
"../../../../assets/img/mimi.jpg",
];

}
