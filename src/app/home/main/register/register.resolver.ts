import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { PlanoService } from '../../../shared/services/plano.service';
import { Pagination } from '../../../shared/model/pagination/pagination';
import { ObterPlanoDto } from 'src/app/shared/model/plano/ObterPlanoDto';

@Injectable({providedIn: 'root'})
export class RegisterResolve implements Resolve<Observable<Pagination<ObterPlanoDto>>>{
    
    constructor(private planoService: PlanoService)
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterPlanoDto>>{
        return this.planoService.get();
    }


}