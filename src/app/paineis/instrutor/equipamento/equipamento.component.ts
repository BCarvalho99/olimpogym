import {Component, OnInit, ElementRef} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {Pagination} from 'src/app/shared/model/Pagination/pagination';
import {SearchService} from 'src/app/shared/components/search/search.service';
import { PaginationFilter } from 'src/app/shared/model/Pagination/paginationFilter';

import {EquipamentoService} from 'src/app/shared/services/equipamento.service'
import {ObterEquipamentoDto} from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';

@Component({selector:'ac-equipamento',
templateUrl:'./equipamento.component.html',
styleUrls:['./equipamento.component.css'
]
}
)
export class EquipamentoComponent implements OnInit{

    paginationObterEquipamentoDto: Pagination <ObterEquipamentoDto>;
    equipamentos: ObterEquipamentoDto[];
    page: number = 1;
    perpage: number = 10;
    campoSearch: boolean = false;
    contentModal:ElementRef;
    equipamento: ObterEquipamentoDto;
    constructor
    (
        private equipamentoService: EquipamentoService,
        private searchService: SearchService,
        private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,

    ){}

    ngOnInit(): void {
        this.paginationObterEquipamentoDto = this.activatedRoute.snapshot.data['ObterEquipamentoDTO']
        this.equipamentos = this.paginationObterEquipamentoDto.data;

    }

        getEquipamento(search: string, page: any = null){
          let paginationFilter =
          {
              search: search,
              page: page != null ? page.page : 1,
              perpage: page != null ? page.perpage : 8
          }

        if(search != '' || search != null){
            this.searchService.setLoadingTrue()
            this.equipamentoService
                .get(paginationFilter, page?.page)
                .subscribe(equipamentos => {
                    this.paginationObterEquipamentoDto = equipamentos,
                    this.equipamentos = equipamentos.data,
                    this.campoSearch = true,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
                });
        }
        }

        fecharModal(){
            this.modalService.dismissAll();
        }
        abrirModal(){
            this.modalService.open(this.contentModal, { size: 'lg'  });
        }

        getStatusAparelho(status: number) {
          switch (status) {
              case 0:
                  return "Funcionando";
              case 1:
                  return "Quebrado";
              case 2:
                  return "Manutenção";
          }
        }

        private foreachEquipamento(equipamentoId: number) {
          this.paginationObterEquipamentoDto.data.forEach(equipamento => {
              if (equipamento.id === equipamentoId) {
                  this.equipamento = equipamento;
              }
          });

          return this.equipamento;
      }

      obterEquipamentoEdit(equipamentoId: number) {
          return this.foreachEquipamento(equipamentoId);
      }

}
