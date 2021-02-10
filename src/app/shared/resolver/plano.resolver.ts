import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../model/Pagination/pagination';
import { ObterPlanoDto } from '../model/plano/ObterPlanoDto';
import { PlanoService } from '../services/plano.service';
@Injectable({providedIn: 'root'})
export class PlanoResolver implements Resolve<Observable<Pagination<ObterPlanoDto>>>{
    
    constructor
    (
        private planoService: PlanoService
    )
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterPlanoDto>>{
        return this.planoService.get();
    }
}