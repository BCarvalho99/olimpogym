import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { SearchService } from 'src/app/shared/components/search/search.service';
import { ObterEquipamentoDto } from 'src/app/shared/model/equipamentos/ObterEquipamentoDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { EquipamentoService } from 'src/app/shared/services/equipamento.service';
@Component({
    selector: 'ac-equipamento',
    templateUrl: './equipamento.component.html',
    styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit {

    paginationEquipamentoDto: Pagination<ObterEquipamentoDto>;
    contentModal: ElementRef;
    equipamentoId: number;
    equipamentoDto: ObterEquipamentoDto;
    pagination: any;

    constructor
        (
            private activatedRoute: ActivatedRoute,
            private searchService: SearchService,
            private equipamentoService: EquipamentoService,
            private modalService: NgbModal,
            private alertService: AlertService
        ) { }
    ngOnInit(): void {
        this.paginationEquipamentoDto = this.activatedRoute.snapshot.data["obterEquipamentoDto"];

        setTimeout(() => {
            this.equipamentoDto;
        }, 100)
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

    getEquipamento(search: string, page: any = null) {
        this.pagination = 
        {
            search: search, 
            page: page != null ? page.page : 1, 
            perpage: page != null ? page.perpage : 8
        }

        // if(search.length != 0 page != null){
        this.searchService.setLoadingTrue()
        this.equipamentoService
            .get(this.pagination, page)
            .subscribe(equipamentos => {
                this.paginationEquipamentoDto = equipamentos,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
            });
        //}
    }

    private foreachEquipamento(equipamentoId: number) {
        this.paginationEquipamentoDto.data.forEach(equipamento => {
            if (equipamento.id === equipamentoId) {
                this.equipamentoDto = equipamento;
            }
        });

        return this.equipamentoDto;
    }

    obterEquipamentoEdit(equipamentoId: number) {
        return this.foreachEquipamento(equipamentoId);
    }

    openModal(equipamentoId: number) {
        this.equipamentoId = equipamentoId;
        this.modalService.open(this.contentModal, { centered: true });
        this.foreachEquipamento(equipamentoId);
    }

    fecharModal() {
        this.modalService.dismissAll();
    }

    delete() {
        this.equipamentoService
            .delete(this.equipamentoId)
            .subscribe(() => {
                this.alertService.success("Equipamento excluído com sucesso !");
                this.paginationEquipamentoDto.data.forEach(equipamento => {
                    if (equipamento.id === this.equipamentoId) {
                        let index = this.paginationEquipamentoDto.data.indexOf(equipamento);
                        this.paginationEquipamentoDto.data.splice(index, 1);
                    }
                })
                    this.modalService.dismissAll();
            }, () => {
                this.alertService.danger("Erro ao excluir equipamento");
            });
    }
}   