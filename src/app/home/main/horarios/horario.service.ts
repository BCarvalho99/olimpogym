import{Injectable} from '@angular/core';
@Injectable({providedIn:'root'})
export class HorarioService {
    descricoes:Array<string> = new Array<string>();
    getMessage(){
        this.descricoes.push("txt1","txt2");
        return this.descricoes;
   }
} 