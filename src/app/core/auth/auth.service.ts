import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../../environments/environment.prod'; 
import { ResponseAuth } from 'src/app/shared/model/auth/response.auth';

const urlApi = environment.urlBase + "auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient){}

    authenticate(email:string, senha: string) : Observable<ResponseAuth>{
        return this.http.post<ResponseAuth>(urlApi, {email, senha});
    }
}