import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment.prod';
import { ObterAulaDto } from '../model/aula/obterAulaDto';
import { Pagination } from '../model/Pagination/pagination';
const API = environment.urlBase +  "aulas";
@Injectable({providedIn: 'root'})
export class AulaService{

    constructor(private http: HttpClient){}

    get(search: string = null){
        return this.http.get<Pagination<ObterAulaDto>>(API + `?search=${search != null ? search : ''}`);
    }
}