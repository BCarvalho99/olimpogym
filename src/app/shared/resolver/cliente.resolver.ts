import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../model/Pagination/pagination';
import { Value } from '../model/cliente/obterClienteDto';
import { ClienteService } from '../services/cliente.service';
@Injectable({providedIn: 'root'})
export class ClienteResolver implements Resolve<Observable<Pagination<Value>>>{
    
    constructor
    (
        private clienteService: ClienteService
    )
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<Value>>{
        return this.clienteService.get();
    }
}