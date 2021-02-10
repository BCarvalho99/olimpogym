import { Injectable } from '@angular/core';

const Key = 'auth-token';

@Injectable({providedIn: 'root'})
export class TokenService{
    
    hasToken():boolean{
        return !!this.getToken();
    }

    setToken(token: string):void{
        window.localStorage.setItem(Key, token);
    }

    getToken(): string{
        return window.localStorage.getItem(Key);
    }

    removeToken():void{
        window.localStorage.removeItem(Key);
    }
}