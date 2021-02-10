import { AtualizarEquipamentoDto } from './../model/equipamentos/AtualizarEquipamentoDto';
import { EquipamentoDto } from './../model/equipamentos/EquipamentoDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pagination } from '../model/Pagination/pagination';
import { ObterEquipamentoDto } from '../model/equipamentos/ObterEquipamentoDto';
import {environment} from '../../../environments/environment.prod';

const API = environment.urlBase + "aparelhos";
@Injectable({providedIn: 'root'})
export class EquipamentoService{

    constructor(private http: HttpClient)
    {}

    post(equipamento: EquipamentoDto){
        return this.http.post(API, equipamento);
    }

    get(paginationFilter: any = null, page: number = 1){
        return this.http
        .get<Pagination<ObterEquipamentoDto>>(API + 
            `?search=${paginationFilter != null ? paginationFilter.search : ''}&perpage=${paginationFilter != null ? paginationFilter?.perpage : 8}&page=${paginationFilter != null ? paginationFilter?.page : 1}`);
    }

    getById(id:number){
        return this.http.get<ObterEquipamentoDto>(API + id);
    }

    put(atualizarEquipamentoDto: AtualizarEquipamentoDto){
        return this.http.put(API, atualizarEquipamentoDto);
    }

    delete(id: number){
        return this.http.delete(API + "/" + id);
    }
}
