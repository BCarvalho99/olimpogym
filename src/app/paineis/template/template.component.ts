import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {UserService} from '../../core/user/user.service';

@Component({
    selector: 'ac-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit, OnChanges{

    
    @Input() titulo:string = null;
    @Input() nome:string = null;
    
    constructor(private userService:UserService){

    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.titulo){
            this.titulo = this.titulo;
        }

        if(changes.nome){
            this.nome = this.nome;
        }
    }

    ngOnInit(): void {
        this.userService
        .getUser()
        .subscribe(user=> { 
            if(this.titulo==null){
                this.titulo = "SEJA BEM VINDO " + user.Nivel.toLocaleUpperCase() + "!";
            }
            if(this.nome==null){
                let first =user.UserName[0].toLocaleUpperCase();
                let rest = user.UserName.substring(1);
                this.nome = "Ola, " + first+rest + "!"
            }   
        })   

    }

}