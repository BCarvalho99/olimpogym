import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseAuth } from 'src/app/shared/model/auth/response.auth';
import { TokenService } from '../token/token.service';
import {Token} from '../../shared/model/auth/token';

import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService{

    private userSubject = new BehaviorSubject<Token>(null);
    private nivelUser: string;

    constructor(private tokenService: TokenService){
        tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) : void{
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    logout(){
        this.tokenService.removeToken();

        this.userSubject.next(null);
    }

    private decodeAndNotify(){
        const token: String = this.tokenService.getToken();

        const user = jwt_decode(token);

        this.nivelUser = user.Nivel;

        this.userSubject.next(user);
    }

    isLoogged():boolean{
        return this.tokenService.hasToken();
    }

    getNivelUser(){
        return this.nivelUser;
    }

    setFuncionarioId(funcionarioId: number){
        window.localStorage.setItem("funcionario", funcionarioId.toString());
    }

    getFuncionarioId() : number{
        return Number.parseInt(window.localStorage.getItem("funcionario"));
    }
}