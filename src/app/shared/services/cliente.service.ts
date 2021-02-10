import { Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';

import { Cliente } from '../model/cliente/cliente';
import { Value, ObterClienteDto } from '../model/cliente/obterClienteDto';
import {environment} from '../../../environments/environment.prod';
import {Pagination} from '../model/Pagination/pagination';
import { AtualizarClienteDto } from '../model/cliente/atualizarClienteDto';
import { Observable } from 'rxjs';

const API = environment.urlBase + "clientes";
@Injectable({providedIn: 'root'})
export class ClienteService{

    constructor(private http: HttpClient){}

    post(cliente: Cliente) : Observable<any>{
        return this.http.post(API, cliente);
    }

    get(search: string = null, pagination: any = null){
        return this.http.get<Pagination<Value>>(API + 
            `?search=${search != null ? search : ''}&perpage=${pagination != null ? pagination.perpage : 8}&page=${pagination != null ? pagination?.page : 1}`);
    }

    getById(id: number){
        return this.http.get<ObterClienteDto>(API +"/"+ id);
    }

    put(cliente: AtualizarClienteDto){
        return this.http.put(API, cliente);
    }

    delete(id: number){
        return this.http.delete(API + "/"+ id);
    }
    
}
