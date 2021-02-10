import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ClienteService } from '../../../shared/services/cliente.service'; 
import { UserService } from '../../../core/user/user.service';
import { ObterClienteDto } from '../../../shared/model/cliente/obterClienteDto';
@Injectable({providedIn: 'root'})
export class DadosResolver implements Resolve<Observable<ObterClienteDto>>{
    
    constructor(private clienteService: ClienteService, private userService: UserService)
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ObterClienteDto>{
        let userId;
        
        this.userService.getUser().subscribe(user => userId = user.UsuarioId);

        return this.clienteService.getById(Number.parseInt(userId));
    }


}