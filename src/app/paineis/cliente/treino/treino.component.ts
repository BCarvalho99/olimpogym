import { Component, OnInit } from '@angular/core';
import { ObterTreinoDto } from 'src/app/shared/model/treino/obterTreinoDto';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ActivatedRoute } from '@angular/router';
import { Treino } from 'src/app/shared/model/cliente-treino/cliente-treino';
import { ClienteTreinoService } from 'src/app/shared/services/cliente-treino.service';
import { UserService } from 'src/app/core/user/user.service';
import { SearchService } from 'src/app/shared/components/search/search.service';

@Component({
    templateUrl: './treino.component.html',
    styleUrls: ['./treino.component.css']
})

export class TreinoComponent implements OnInit{
    paginationObterTreinoDto:  Pagination<Treino>;
    clienteTreinos: Treino[];
    page: number = 1;
    perpage: number = 10;
    campoSearch: boolean = false;
    constructor
    (
        private activatedRoute: ActivatedRoute,
        private clienteTreinoService: ClienteTreinoService,
        private userService: UserService,
        private searchService: SearchService
    ){}
    ngOnInit(): void {
        this.paginationObterTreinoDto = this.activatedRoute.snapshot.data['obterTreinoCliente'];

        this.clienteTreinos = this.paginationObterTreinoDto.data
    }

    getClienteTreino(search: string, page: any = null){
        let digitou = false;
        let clienteId = 0;
        this.userService.getUser().subscribe(user => {
            clienteId = Number.parseInt(user.UsuarioId)
        });

        // if(search.length != 0 page != null){
            this.searchService.setLoadingTrue()
            this.clienteTreinoService
                .get(clienteId, search, page?.page, page?.perpage)
                .subscribe(clienteTreinos => {
                    this.paginationObterTreinoDto = clienteTreinos,
                    this.clienteTreinos = clienteTreinos.data,
                    this.campoSearch = true,
                    setTimeout(() => {
                        this.searchService.setLoadingFalse()
                    }, 250)
                });
            digitou = true;
        //}
    }


}