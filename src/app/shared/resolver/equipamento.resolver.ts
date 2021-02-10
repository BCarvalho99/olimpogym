import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../model/Pagination/pagination';
import { ObterEquipamentoDto } from '../model/equipamentos/ObterEquipamentoDto';
import { EquipamentoService } from '../services/equipamento.service';
@Injectable({providedIn: 'root'})
export class EquipamentoResolver implements Resolve<Observable<Pagination<ObterEquipamentoDto>>>{
    
    constructor
    (
        private equipamentoService: EquipamentoService
    )
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterEquipamentoDto>>{
        return this.equipamentoService.get();
    }
}