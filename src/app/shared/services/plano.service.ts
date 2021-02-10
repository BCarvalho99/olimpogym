import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plano } from '../model/plano/plano';
import { Pagination } from '../model/Pagination/pagination';
import { PlanoAtualizarDto } from '../model/plano/planoAtualizarDto';
import { ObterPlanoDto, Value } from '../model/plano/ObterPlanoDto';
import {environment} from '../../../environments/environment.prod';

const API = environment.urlBase + "planos";
@Injectable({providedIn: 'root'})
export class PlanoService{

    constructor(private http: HttpClient) 
    {}

    post(plano: Plano){
        return this.http.post(API, plano);
    }

    get(){
        return this.http.get<Pagination<ObterPlanoDto>>(API);
    }

    getById(id:number){
        return this.http.get<Value>(API +"/"+ id);
    }

    put(planoAtulizarDto: PlanoAtualizarDto){
        return this.http.put(API, PlanoAtualizarDto);
    }

    delete(id: number){
        return this.http.delete(API + id);
    }
}