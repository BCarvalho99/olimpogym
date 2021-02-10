import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Pagination} from '../../../shared/model/Pagination/pagination';
import {ObterAtividadeDTO} from '../../../shared/model/atividade/ObertAtividadeDTO';
import {AtividadeServices} from '../../../shared/services/atividade.service';
@Injectable({providedIn: 'root'})
export class DuvidaResolver implements Resolve<Observable<Pagination<ObterAtividadeDTO>>>{

    constructor(private atividadeService: AtividadeServices){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pagination<ObterAtividadeDTO>> {
        return this.atividadeService.get();
    }

}