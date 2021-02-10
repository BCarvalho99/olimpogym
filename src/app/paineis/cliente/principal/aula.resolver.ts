import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../../../shared/model/Pagination/pagination';
import { AulaService } from '../../../shared/services/aula.service';
import { ObterAulaDto } from '../../../shared/model/aula/obterAulaDto';

@Injectable({providedIn: 'root'})
export class AulaServiceResolver implements Resolve<Observable<Pagination<ObterAulaDto>>>{
    
    constructor
    (
        private aulaService: AulaService
    )
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterAulaDto>>{
        let search = "6"
        
        return this.aulaService
            .get(search);
    }
}