import { Injectable } from '@angular/core';
import { Value } from '../../../shared/model/plano/ObterPlanoDto'

const Key = 'plano-cliente';
@Injectable({providedIn: 'root'})
export class PlanoStorageService{

    hasPlano():boolean{
        return !!this.getPlano();
    }

    setPlano(value: Value):void{
        window.localStorage.setItem(Key, value.value.toString());
    }

    getPlano(): string{
        return window.localStorage.getItem(Key);
    }

    removePlano():void{
        window.localStorage.removeItem(Key);
    }
}