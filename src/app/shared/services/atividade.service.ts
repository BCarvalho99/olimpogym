import {Injectable} from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import { Pagination } from '../model/Pagination/pagination';
import {ObterAtividadeDTO} from '../model/atividade/ObertAtividadeDTO'

const API = environment.urlBase + 'atividades';
@Injectable({providedIn:'root'})
export class AtividadeServices {

    constructor(private http:HttpClient) {}

    post(atividade: ObterAtividadeDTO){
        return this.http.post(API, atividade);
    }

    get(paginationFilter: any = null, page: number = 1){

        return this.http
        .get<Pagination<ObterAtividadeDTO>>
            (API + `?page=${page}&perpage=${paginationFilter != null?paginationFilter.perPage:10}&search=${paginationFilter != null ? paginationFilter.search : ''}`);
    }

    getById(id:number){
        return this.http.get<ObterAtividadeDTO>(API + id);
    }

    put(AtividadeAtulizarDto: ObterAtividadeDTO){
        return this.http.put(API, AtividadeAtulizarDto);
    }

    delete(id: number){
        return this.http.delete(API + id);
    }
}
 