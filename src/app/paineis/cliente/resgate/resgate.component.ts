import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './resgate.component.html',
    styleUrls: ['./resgate.component.css']
})

export class ResgateComponent{
    count:number = Math.floor(Math.random() * (1 + 1));
}