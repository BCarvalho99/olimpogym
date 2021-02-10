import { ObterEquipamentoDto } from './../../../shared/model/equipamentos/ObterEquipamentoDto';
import { EquipamentoService } from './../../../shared/services/equipamento.service';
import {
  Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'ac-infomain',
  templateUrl: './infomain.component.html',
  styleUrls:[
    './infomain.component.css'
  ]
})

export class InfoMainComponent implements OnInit{
  obterEquipamentoDto:ObterEquipamentoDto[];
  index:number = 0;
  textButton:string = 'teste';
  modalTitle:string;
  buttonModal:string;

  constructor(private equipamentoService:EquipamentoService){}
  ngOnInit(): void {
    this.equipamentoService.get().subscribe(equipamentos => {
      this.obterEquipamentoDto = equipamentos.data
    })
  }

  getEquipamento(indice:number = 0){
    this.index = indice != 0 && indice < this.obterEquipamentoDto.length -1 ? indice : this.index;

    if (this.index == this.obterEquipamentoDto.length -1){
      this.index = -1;
    }
    this.index++;


  }



  equip_img = ["../../../../../assets/img/equipamentos/supino_uni.jpg",
"../../../../../assets/img/equipamentos/triceps.jpg",
"../../../../../assets/img/equipamentos/cruci.jpg",
"../../../../../assets/img/equipamentos/eleva_mas_nao_leva.jpg",
"../../../../../assets/img/equipamentos/eleva_frente.jpg",
];
}
