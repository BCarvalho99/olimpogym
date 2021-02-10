import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../model/Pagination/pagination';
import { Value } from '../model/funcionario/obterFuncionarioDto';
import { FuncionarioService } from '../services/funcionario.service';
@Injectable({providedIn: 'root'})
export class FuncionarioResolver implements Resolve<Observable<Pagination<Value>>>{
    
    constructor
    (
        private funcionarioService: FuncionarioService
    )
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<Value>>{
        return this.funcionarioService.get();
    }
}

