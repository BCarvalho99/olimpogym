import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeMasks } from 'ngx-mask';
import { UserService } from 'src/app/core/user/user.service';
import { Token } from 'src/app/shared/model/auth/token';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
    templateUrl: './cliente.component.html',
    selector: 'ac-cliente',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

    constructor
    (
        private userService: UserService,
        private router: Router,
    ){}

    ngOnInit(): void {}

    logout(){
        this.userService.logout();
        this.router.navigateByUrl("");
    }

    inicio(){
        this.router.navigateByUrl("painel/cliente");
    }
}