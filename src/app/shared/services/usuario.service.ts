import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment.prod';
import { Usuario } from '../model/usuario/usuario';

const API = environment.urlBase + "usuarios"
@Injectable({providedIn: 'root'})
export class UsuarioService{

    constructor(private http: HttpClient){}

    post(usuario: any){
        return this.http.post(API, usuario);
    }

    get(){
        return this.http.get<Usuario>(API);
    }

    getById(id: number){
        return this.http.get(API + id);
    }

    put(usuario: Usuario){
        return this.http.put(API, usuario);
    }

    delete(id: number){
        return this.http.delete(API + id);
    }
}