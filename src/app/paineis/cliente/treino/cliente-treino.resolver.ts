import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../../../shared/model/Pagination/pagination';
import { Treino } from '../../../shared/model/cliente-treino/cliente-treino';
import { ClienteTreinoService } from '../../../shared/services/cliente-treino.service'; 
import { UserService } from '../../../core/user/user.service';
@Injectable({providedIn: 'root'})
export class ClienteTreinoResolver implements Resolve<Observable<Pagination<Treino>>>{
    
    constructor
    (
        private clienteTreinoService: ClienteTreinoService, 
        private userService: UserService)
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<Treino>>{
        let clienteId = 0;

        this.userService.getUser().subscribe(cliente => {
            clienteId = Number.parseInt(cliente.UsuarioId);
        })
        
        return this.clienteTreinoService
            .get(clienteId);
    }
}