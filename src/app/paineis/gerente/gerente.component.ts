import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from '../../core/user/user.service';
@Component({selector:'ac-gerente', 
templateUrl:'./gerente.component.html', 
styleUrls:['./gerente.component.css'
]
}
)
export class GerenteComponent implements OnInit{

    showReport: string = '';
    constructor
    (
        private userService: UserService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.showReport =  this.userService.getNivelUser() == "Supervisor" ? '' : ''
    }

    
    
    logout(){
        this.userService.logout();
        
        this.router.navigate(['home']);
    }

    inicio(){
        this.router.navigateByUrl("painel/gerente");
    }
}