import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment.prod';
import {EmailDto} from '../model/email/emailDto';
const API = environment.urlBase + "emails"
@Injectable({providedIn: 'root'})
export class EmailService{
    constructor(private http: HttpClient){}

    post(emailDto: EmailDto){
        return this.http.post(API, emailDto);
    }
}