import { Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment.prod';
import { Pagination } from '../model/Pagination/pagination';
import { ObterFuncionarioDto, Value } from '../model/funcionario/obterFuncionarioDto';
import { Observable } from 'rxjs';

const API = environment.urlBase + "funcionarios";
@Injectable({providedIn: 'root'})
export class FuncionarioService{

    constructor(private http: HttpClient){}

    post(funcionario: ObterFuncionarioDto):Observable<any>{
        return this.http.post(API, funcionario);
    }

    get(search: string = null, pagination: any = null){
        return this.http.get<Pagination<Value>>(API + 
            `?search=${search != null ? search : ''}&perpage=${pagination != null ? pagination.perpage : 8}&page=${pagination != null ? pagination?.page : 1}`);
    }

    getById(id: number){
        return this.http.get<ObterFuncionarioDto>(API +"/"+ id);
    }

    put(funcionario: ObterFuncionarioDto){
        return this.http.put(API, funcionario);
    }

    delete(id: number){
        return this.http.delete(API +"/"+ id);
    }
    
}