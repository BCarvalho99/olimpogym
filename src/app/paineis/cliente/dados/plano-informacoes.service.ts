import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Value} from '../../../shared/model/plano/ObterPlanoDto';

@Injectable({providedIn: 'root'})
export class PlanoInformacoesService{
    plano$ = new BehaviorSubject<number>(null);

    setValuePlano(valor: number){
        this.plano$.next(valor);
    }

    removeValuePlano(){
        this.plano$.next(null);
    }

    getValuePlano(){
        return this.plano$.asObservable();
    }
}