import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

import { Treino } from '../model/cliente-treino/cliente-treino';
import { Pagination } from '../model/Pagination/pagination';

const API = environment.urlBase + "cliente/"
@Injectable({providedIn: 'root'})
export class ClienteTreinoService{
    constructor(private http: HttpClient){}

    get(clienteId: number, search: string = null, page: number = 1, perpage: number = 10){
        return this.http
        .get<Pagination<Treino>>(API + clienteId +"/treinos?search="+
        `${search != null ? search : ''}&perpage=${perpage}&page=${page}`);
    }

    post(clienteId: number, treinoId: number){
        return this.http.post(API + clienteId + "/treinos"+ treinoId, {});
    }
}