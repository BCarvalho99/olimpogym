import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Pagination } from '../../../shared/model/Pagination/pagination';
import { ObterDuvidaDto } from '../../../shared/model/duvida/obterDuvidaDto';
import { DuvidaService } from '../../../shared/services/duvida.service'; 
@Injectable({providedIn: 'root'})
export class DuvidaResolver implements Resolve<Observable<Pagination<ObterDuvidaDto>>>{
    
    constructor(private duvidaService: DuvidaService)
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterDuvidaDto>>{
        return this.duvidaService.get(route.queryParams.search);
    }
}