import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pagination } from '../model/Pagination/pagination';
import {environment} from '../../../environments/environment.prod';
import { ObterTreinoDto } from '../model/treino/obterTreinoDto';
import { Treino } from '../model/treino/treino';
import { Value } from '../model/value';

const API = environment.urlBase + "treinos";
@Injectable({providedIn: 'root'})
export class TreinoService{

    constructor(private http: HttpClient) 
    {}

    post(treino: Treino){
        return this.http.post(API, treino);
    }

    get(){
        return this.http.get<Pagination<ObterTreinoDto>>(API);
    }

    getById(id:number){
        return this.http.get<Value<Treino>>(API +"/"+ id);
    }

    put(atualizarTreino: Treino){
        return this.http.put(API, atualizarTreino);
    }

    delete(id: number){
        return this.http.delete(API + id);
    }
}